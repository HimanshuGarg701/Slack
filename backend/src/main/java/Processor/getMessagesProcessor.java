package Processor;

import DTO.ResponseDTO_withDTOList_helper;
import DTO.ResponseDTO_withDTOList;

import static DAO.MessageDAO.getAllMessages;

public class getMessagesProcessor implements ProcessorMessages {
    @Override
    public ResponseDTO_withDTOList process() {

        ResponseDTO_withDTOList_helper resHelper = new ResponseDTO_withDTOList_helper();
        resHelper.setSuccess(true);
        resHelper.setPayload(getAllMessages());
        return resHelper.build();
    }
}
