public class TestBankAccount {
    public static void main(String[] args) {
        // Accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        account1.depositMoney(300, "Checking");
        account1.display();

        account1.withdrawMoney(300, "Checking");
        account1.display();

        account2.depositMoney(200, "Checking");
        account2.display();

        account2.withdrawMoney(100, "Checking");
        account2.display();

        account3.depositMoney(400, "Checking");
        account3.display();

        account3.withdrawMoney(800, "Checking");
        account3.display();
    }
}