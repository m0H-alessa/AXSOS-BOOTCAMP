import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();

    // Constructors initiation
    public Order() {
        this.name = "Guest";
        items = new ArrayList<Item>();
    }

    public Order(String name) {
        this.name = name;
        items = new ArrayList<Item>();
    }

    // name getters and setters
    public void setName(String name) {
        this.name = name;
    }

    public String getName(String name) {
        this.name = name;
        return name;
    }

    // IsReady getters and setters
    public Boolean getIsReady(Boolean ready) {
        this.ready = ready;
        return ready;
    }

    public void setisReady(Boolean ready) {
        this.ready = ready;
    }

    // Items getters and setters
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void addItem(Item item) {
        this.items.add(item);
    }

    public String getStatusMessage() {
        if (this.ready == true) {
            return "Your order is ready.";
        } else {
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public void display() {
        System.out.println("Customer Name: " + this.name);
        double total = 0;
        for (int i = 0; i < items.size(); i++) {
            System.out.println(items.get(i).getName() + " - " + items.get(i).getPrice());
            total += items.get(i).getPrice();
        }
        System.out.println("Total:" + total);
    }

    public Double getOrderTotal() {
        double total = 0;
        for (int i = 0; i < items.size(); i++) {
            total += this.items.get(i).getPrice();
        }
        return total;
    }

}