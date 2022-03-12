import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class cafeuUtil {

    public int getStreakGoal() {
        int[] numWeeks = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int sum = IntStream.of(numWeeks).sum();
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double[] lineItems = { 3.5, 1.5, 4.0, 4.5 };
        double total = 0.0;
        for (int i = 0; i < lineItems.length; i++) {
            total = total + lineItems[i];
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        List<String> loadMenu = Arrays.asList("drip coffee", "cappucino", "latte", "mocha");
        ArrayList<String> menu = new ArrayList<String>();
        menu.addAll(loadMenu);
        System.out.println(menu);
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println(String.format("There are %d people in front of you", customers.size()));
        customers.add(userName);
        for (String name : customers) {
            System.out.println(name);
        }

    }

}