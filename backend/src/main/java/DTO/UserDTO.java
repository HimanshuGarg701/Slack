package DTO;

public class UserDTO implements DTO {
    public String id;
    public final String username;
    public String displayname;
    public String password;

    public UserDTO(String id, String password, String username, String displayname){
        this.id = id;
        this.username = username;
        this.password = password;
        this.displayname = displayname;
    }
}
