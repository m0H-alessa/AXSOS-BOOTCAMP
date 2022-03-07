import java.util.ArrayList;
import java.util.Random;

public class TestPuzzleJava {

	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		Character fun1 = generator.getRandomLetter();
		String fun2 = generator.generatePassword();
		ArrayList<String> fun3 = generator.getNewPasswordSet(1);

		System.out.println(randomRolls);
		System.out.println(fun1);
		System.out.println(fun2);
		System.out.println(fun3);
	}
}
