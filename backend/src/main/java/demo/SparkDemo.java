package demo;

import Processor.SignInProcessor;
import Processor.SignUpProcessor;
import com.google.gson.Gson;
import spark.Request;
import spark.Response;

import static spark.Spark.*;

public class SparkDemo {
    public static void main(String[] args) {
        port(1235);
        webSocket("/ws", WebSocketHandler.class);
        post("/auth/signin", SparkDemo::signin);
        post("/auth/signup", SparkDemo::signup);
    }

    private static Object signin(Request req, Response res) {
      return new Gson().toJson(new SignInProcessor(req, res).process());
    }

    private static Object signup(Request req, Response res) {
      return new Gson().toJson(new SignUpProcessor(req, res).process());
    }
}
