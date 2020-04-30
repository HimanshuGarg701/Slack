package demo;

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


  public void broadcast(String message){
    sessionMap.keySet().forEach( (session) ->{

      MessageDto messagedto = new MessageDto("FILL_IN_USERNAME", message);

      try{
        session.getRemote().sendString(gson.toJson(messagedto, MessageDto.class));
      }
      catch (Exception e){
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
    broadcast(message);
  }
}