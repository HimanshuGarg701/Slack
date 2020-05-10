package DTO;

public class InternalMessageDTO implements DTO {
    public final String id;
    public final String username;
    public final String message;
    public final int likeFlag;
    public int likeCount;

    public InternalMessageDTO(String id, String username, String message, int likeFlag, int likeCount) {
        this.id = id;
        this.username = username;
        this.message = message;
        this.likeFlag = likeFlag;
        this.likeCount = likeCount;
    }
}
