package DAO;

import Database.DatabaseConnection;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
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

    private static UserDAO getInstance(){
        if(userDao == null){
            userDao = new UserDAO();
        }

        return userDao;
    }
}
