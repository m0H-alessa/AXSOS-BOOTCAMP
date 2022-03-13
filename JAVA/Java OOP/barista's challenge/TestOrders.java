
public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        Item item1 = new Item("mocha", 3.5);
        Item item2 = new Item("latte", 2.5);
        Item item3 = new Item("drip coffee", 1.5);
        Item item4 = new Item("capuccino", 5.5);
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order("Armin VB");
        Order order4 = new Order("Tiesto");
        Order order5 = new Order("John Oc");

        order1.addItem(item1);
        order1.addItem(item2);
        order2.addItem(item4);
        order2.addItem(item3);
        order3.addItem(item1);
        order3.addItem(item4);
        order4.addItem(item3);
        order4.addItem(item1);
        order5.addItem(item2);
        order5.addItem(item4);

        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();

        order1.setisReady(true);
        order3.setisReady(true);
        order5.setisReady(false);

        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());

    }
}