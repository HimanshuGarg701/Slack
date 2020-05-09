package Processor;

import DTO.ResponseDTO;
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
        return null;
    }
}
