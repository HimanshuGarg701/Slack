package mainDriver;

import DAO.MessageDAO;
import DTO.InternalMessageDTO;
import DTO.MessageResPayloadDTO;
import DTO.ResponseDTO;
import DTO.ResponseDTOhelper;
import Processor.MessageProcessor;
import com.google.gson.Gson;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import java.io.*;
import java.util.*;
import java.util.concurrent.*;

@WebSocket
public class WebSocketHandler {
  // Store sessions if you want to, for example, broadcast a message to all users
  static Map<Session, Session> sessionMap = new ConcurrentHashMap<>();
  Gson gson = new Gson();


  public void broadcast(ResponseDTO responseDto){
    sessionMap.keySet().forEach( (session) ->{
      try{
        //send out responseDto to each active session.
        session.getRemote().sendString(gson.toJson(responseDto, ResponseDTO.class));
      }
      catch (Exception e){
        //prints the call stack for error tracing.
        e.printStackTrace();
      }
    });
  }

  @OnWebSocketConnect
  public void connected(Session session) throws IOException {
    session.getRemote().sendString("Connected");
    sessionMap.put(session, session);
  }

  @OnWebSocketClose
  public void closed(Session session, int statusCode, String reason) throws IOException {
    session.getRemote().sendString("Disconnected");
    sessionMap.remove(session);
  }

  @OnWebSocketMessage
  public void message(Session session, String message) throws IOException {
    System.out.println("Got: " + message);   // Print message
    ResponseDTO responseDto = new MessageProcessor(message).process();
    System.out.println("Broadcasting: " + gson.toJson(responseDto));   // Print message

    broadcast(responseDto);
  }
}