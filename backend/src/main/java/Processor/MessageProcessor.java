package Processor;

import DAO.MessageDAO;
import DTO.*;
import com.google.gson.Gson;

public class MessageProcessor implements Processor {
    Gson gson = new Gson();
    String rawMessage = null;
    InternalMessageDTO messageDto = null;
    MessageResPayloadDTO messageResPayloadDto = null;
    ResponseDTOhelper responseDTOhelper = new ResponseDTOhelper();

    public MessageProcessor(String message){
        this.rawMessage = message;
        messageDto = gson.fromJson(message, InternalMessageDTO.class);
    }

    public ResponseDTO process() {

        if(messageDto.likeFlag == 0){

            //if no like flag passed in then process the message as a new one.
            if(messageDto.username == null || messageDto.message == null) {
                System.out.println("** username or message have not been passed in properly! **");
                responseDTOhelper.setSuccess(false);
                responseDTOhelper.setPayload(new ErrorDTO("username or message have not been passed in properly!"));
            }else{
                //else process it as a message update for the like.

                //insert new message into the DB and get messageId to be returned in response.
                String messageId = MessageDAO.insertMessage(messageDto);

                responseDTOhelper.setSuccess(true);
                responseDTOhelper.setPayload(new MessageResPayloadDTO(messageId, messageDto.username, messageDto.message, messageDto.likeCount));
            }

        }else{

            if(messageDto.id == null) {
                System.out.println("** messageId have not been provided properly! **");
                responseDTOhelper.setSuccess(false);
                responseDTOhelper.setPayload(new ErrorDTO("messageId have not been provided properly!"));
            }else {
                responseDTOhelper.setSuccess(true);
                responseDTOhelper.setPayload(MessageDAO.updateLikeCount(messageDto.id, messageDto.likeFlag));
            }
        }

        return responseDTOhelper.build();
    }
}
