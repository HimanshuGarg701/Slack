package DAO;

import DTO.DTO;
import DTO.UserDTO;
import Database.DatabaseConnection;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class UserDAO {

    private static UserDAO userDao;

    private static MongoClient mongoClient = DatabaseConnection.getInstance();
    private static MongoDatabase db = mongoClient.getDatabase("slack");
    private static MongoCollection<Document> user_collection = db.getCollection("users");

    private UserDAO(){
        // Empty Constructor
    }

    public static UserDAO getInstance(){
        if(userDao == null){
            userDao = new UserDAO();
        }

        return userDao;
    }

    public DTO validUser(String username, String password){
        DTO user;
        try{
            MongoCursor<Document> cursor = user_collection.find(new BasicDBObject("username", username)).iterator();
            Document doc;
            if(cursor.hasNext()){
                doc = cursor.next();
                String returnedPassword = doc.get("password").toString();
                if(returnedPassword.equals(password)) {
                    user = new UserDTO(
                            (String) doc.get("id"),
                            null,
                            (String) doc.get("username"));
                }else{
                    user = null;
                }
            }else{
                user = null;
            }
            cursor.close();
        }catch(Exception e){
            System.out.println("ERROR IN USER DAO Valid User method");
            user = null;
        }
        return user;
    }
}
