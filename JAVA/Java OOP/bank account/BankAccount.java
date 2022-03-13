public class BankAccount {
    private double checkingBalance;
    private double savingBalance;
    private static int numberOfAccounts = 0;
    private static double totalAmountOfMoney = 0;

    // Constructor method
    public BankAccount() {
        numberOfAccounts++;
    }

    public static int numofaccount() {
        return numberOfAccounts;
    }

    public static double totalamount() {
        return totalAmountOfMoney;
    }

    // checkingBalance Getters and Setters
    public void setCheck(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public Double getCheck() {
        return checkingBalance;
    }

    // savingBalance Getters and Setters
    public void setSaving(double savingBalance) {
        this.savingBalance = savingBalance;
    }

    public Double getSaving() {
        return savingBalance;
    }

    // BankAccount Methods
    public Double depositMoney(double amount, String account) {
        if ("Checking" == account) {
            this.checkingBalance += amount;
            totalAmountOfMoney += amount;
            return checkingBalance;
        } else {
            this.savingBalance += amount;
            totalAmountOfMoney += amount;
            return savingBalance;
        }
    }

    public Double withdrawMoney(double amount, String account) {
        if (account == "Checking") {
            if (this.checkingBalance - amount >= 0) {
                this.checkingBalance -= amount;
                totalAmountOfMoney -= amount;
                return checkingBalance;
            } else {
                System.out.println("Insufficient Funds");
                return checkingBalance;
            }
        } else {
            if (this.savingBalance - amount > 0) {
                this.savingBalance -= amount;
                totalAmountOfMoney -= amount;
                return savingBalance;
            } else {
                System.out.println("Insufficient Funds");
                return savingBalance;
            }
        }
    }

    public void display() {
        System.out.println("Customer Checking Balance: " + this.checkingBalance);
        System.out.println("Customer Saving Balance: " + this.savingBalance);
    }

}