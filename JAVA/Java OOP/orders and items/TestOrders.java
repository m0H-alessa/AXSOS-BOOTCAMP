public class TestOrders {
    public static void main(String[] args) {
        // Menu items
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item();

        // Names

        item1.name = "mocha";
        item2.name = "latte";
        item3.name = "drip coffee";
        item4.name = "cappucino";

        // Prices

        item1.price = 2.5;
        item2.price = 4.0;
        item3.price = 5.5;
        item4.price = 3.5;
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order();
        Order order4 = new Order();

        // Names

        order1.name = "Cindhuri";
        order2.name = "Jimmy";
        order3.name = "Noah";
        order4.name = "Sam";

        // Application Simulations

        order2.items.add(item1);
        order2.total += item1.price;
        order3.items.add(item4);
        order3.total += item4.price;
        order4.items.add(item2);
        order4.total += item2.price;
        order1.ready = true;
        order4.items.add(item2);
        order4.items.add(item2);
        order4.total += 2 * item2.price;
        order2.ready = true;

        // Use this example code to test various orders' updates

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.println("Hello " + order2.name + " , Your Order is " + order2.ready);
    }

}