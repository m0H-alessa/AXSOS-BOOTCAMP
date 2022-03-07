import java.util.ArrayList;
import java.util.Random;
import javax.print.DocFlavor.STRING;

public class PuzzleJava {

    public ArrayList<Integer> getTenRolls() {
        Random X = new Random();
        ArrayList<Integer> Random = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++) {
            int nxt = X.nextInt(20);
            Random.add(nxt);
        }
        return Random;
    }

    public Character getRandomLetter() {
        Random z = new Random();
        ArrayList<Character> Random = new ArrayList<Character>();
        for (int i = 0; i < 26; i++) {
            int nxt = z.nextInt(90 - 65) + 65;
            char cnxt = (char) nxt;
            Random.add(cnxt);
        }
        Random F = new Random();
        int H = F.nextInt(25);
        int W = 0;
        for (int j = 0; j < 26; j++) {
            if (H == j) {
                W = j;
                break;
            }
        }
        char y = Random.get(W);
        return y;
    }

    public String generatePassword() {
        Random M = new Random();
        String passWord = "";
        for (int s = 0; s < 8; s++) {
            int nxt = M.nextInt(126);
            char cnxt = (char) nxt;
            passWord += cnxt;
        }
        return passWord;
    }

    public ArrayList<String> getNewPasswordSet(int length) {
        ArrayList<String> Random = new ArrayList<String>();
        Random J = new Random();
        for (int i = 0; i < length; i++) {
            String newPassWord = "";
            for (int f = 0; f < 8; f++) {
                int nxt = J.nextInt(126);
                char cnxt = (char) nxt;
                newPassWord += cnxt;
            }
            Random.add(newPassWord);
        }
        return Random;
    }

}
