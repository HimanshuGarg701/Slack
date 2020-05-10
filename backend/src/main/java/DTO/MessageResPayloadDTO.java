package DTO;

public class MessageResPayloadDTO implements DTO {
    public final String id;
    public final String message;
    public final String username;
    public final int likeCount;

    public MessageResPayloadDTO(String id, String username, String message, int likeCount) {
        this.id = id;
        this.message = message;
        this.username = username;
        this.likeCount = likeCount;
    }
}
