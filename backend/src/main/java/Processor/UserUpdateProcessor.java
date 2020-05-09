package Processor;

import DAO.UserDAO;
import DTO.DTO;
import DTO.UserDTO;
import DTO.ResponseDTOhelper;
import DTO.ResponseDTO;
import com.google.gson.Gson;
import spark.Request;
import spark.Response;

public class UserUpdateProcessor implements Processor {
    Request req;
    Response res;

    public UserUpdateProcessor(Request req, Response res) {
        this.req = req;
        this.res = res;
    }

    @Override
    public ResponseDTO process() {
        DTO payload = null;
        DTO validUser = null;
        ResponseDTOhelper rbh = new ResponseDTOhelper();
        boolean success = false;
        Gson gson = new Gson();
        UserDAO userDao = UserDAO.getInstance();
        String bodyString = req.body();
        try {
            UserDTO userDTO = gson.fromJson(bodyString, UserDTO.class);
            payload = userDao.updateUser(userDTO.username, userDTO.password);
            if(payload!=null){
                success = true;
            }
        }catch(Exception e){
            System.out.println("Error in User Updating");
        }
        rbh.setSuccess(success);
        rbh.setPayload(payload);
        return rbh.build();
    }
}
