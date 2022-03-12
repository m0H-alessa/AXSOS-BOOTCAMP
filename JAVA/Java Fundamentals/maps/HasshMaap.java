import java.util.HashMap;
import java.util.Set;

public class HasshMaap {

    public static void main(String[] args) {

        HashMap<String, String> TrancePlayList = new HashMap<String, String>();
        TrancePlayList.put("Rain", "Armin VA");
        TrancePlayList.put("Sun & Moon", "Above&beyond");
        TrancePlayList.put("In and Out of LOVE", "Armin VA");
        String name = TrancePlayList.get("Rain");
        System.out.println("Artist name: " + name);

        Set<String> M = TrancePlayList.keySet();
        for (String key : M) {
            System.out.println(key);
            System.out.println(TrancePlayList.get(key));
        }

    }

}