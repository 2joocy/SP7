package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("demouser")
@RolesAllowed("User")
public class User {
    private final String footballArr = "[{'name': 'Liverpool', 'url': 'http://www.liverpoolfc.com'},{'name': 'Manchester United', 'url': 'http://www.manutd.com/'}]";

    private Gson gson = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomething() {
        return "{\"message\" : \"Hello User from Server (Accesible by only authenticated USERS)\"}";
    }

    @GET
    @Path("/footballclubs")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFootballClub() {
        ArrayList arr = gson.fromJson(footballArr, ArrayList.class);
        
        return gson.toJson(arr, ArrayList.class);
    }

}
