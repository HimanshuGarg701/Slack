package Processor;

import DTO.ResponseDTO;
import spark.Request;
import spark.Response;

public class SignInProcessor implements Processor {
    Request req;
    Response res;

    public SignInProcessor(Request req, Response res) {
        this.req = req;
        this.res = res;
    }

    @Override
    public ResponseDTO process() {
        return null;
    }
}
