package DAO;

import DTO.DTO;
import DTO.ErrorDTO;
import DTO.InternalMessageDTO;
import DTO.MessageResPayloadDTO;
import Database.DatabaseConnection;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.bson.types.ObjectId;
import spark.Response;

import static com.mongodb.client.model.Filters.*;

public class MessageDAO {
    private static MongoClient mongoClient = DatabaseConnection.getInstance();
    private static MongoCollection messagesCollection = null;

    private MessageDAO(){

    }

    //This will return the message ID of the message created for inc and dec likeCount later.
    public static String insertMessage(InternalMessageDTO message){
        MongoClient mongoClient = DatabaseConnection.getInstance();

        //For lazy loading
        if(messagesCollection == null) messagesCollection = mongoClient.getDatabase("MyDatabase").getCollection("Messages");

        Document messageDoc = new Document();

        //Build the message that will be inserted into the database.
        messageDoc
                .append("username", message.username)
                .append("message", message.message)
                .append("likeCount", message.likeCount);

        messagesCollection.insertOne(messageDoc);

        Iterable<Document> messagesFound = messagesCollection.find(messageDoc);

        return messagesFound.iterator().next().get("_id").toString();

    }

    //increments the like of the likeCount.
    public static DTO updateLikeCount(String messageId, int likeFlag){
        MongoClient mongoClient = DatabaseConnection.getInstance();

        //For lazy loading
        if(messagesCollection == null) messagesCollection = mongoClient.getDatabase("MyDatabase").getCollection("Messages");

        //This will be the document used to return the Res dto.
        Iterable<Document> messageFound = messagesCollection.find(new Document( "_id", new ObjectId(messageId)));

        if((int) messageFound.iterator().next().get("likeCount") <= 0 && likeFlag == -1) return new ErrorDTO("The count is already 0 you cannot go any lower than that!");

        //updating the message to increment or decrement by the amount specified in the flag passed in.
        messagesCollection.updateOne(eq("_id", new ObjectId(messageId)), new Document("$inc", new Document("likeCount", likeFlag)));

        return new MessageResPayloadDTO(messageFound.iterator().next().get("_id").toString(), messageFound.iterator().next().get("username").toString(), messageFound.iterator().next().get("message").toString(), (int) messageFound.iterator().next().get("likeCount"));
    }
}
