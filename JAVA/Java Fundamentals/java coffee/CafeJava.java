public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app
        String greetGeneral = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = " Your total is $";

        // Menu variables (add yours below)
        double MochaPrice = 3.5;
        double filterCoffee = 2.5;
        double latte = 3.0;
        double cappuccino = 3.8;

        // Client name variables (add yours below)
        String client1 = "Mahmoud ";
        String client2 = "Jehad ";
        String client3 = "Saaaam ";
        String client4 = "Jimmy ";

        // Order completions (add yours below)
        boolean isOrderReady1 = false;
        boolean isOrderReady2 = true;
        boolean isOrderReady3 = false;
        boolean isOrderReady4 = true;

        // SIMULATION OF APP INTERACTION(Add your code for the challenges below)
        // Example:
        System.out.println(greetGeneral + client1); // Displays "Welcome to Café Java, Cindhuri"
        // ** Print statements about customer interactions will go here ** //
        System.out.println(client1 + readyMessage);

        if (isOrderReady2) {
            System.out.println(client2 + readyMessage + displayTotalMessage + cappuccino);
        } else {
            System.out.println(client2 + pendingMessage);
        }
        System.out.println(client3 + displayTotalMessage + (latte * 2));

        if (isOrderReady3) {
            System.out.println(pendingMessage);
        } else {
            System.out.println(client3 + readyMessage);
        }

        System.out.println(client4 + displayTotalMessage + (latte - filterCoffee));
    }
}