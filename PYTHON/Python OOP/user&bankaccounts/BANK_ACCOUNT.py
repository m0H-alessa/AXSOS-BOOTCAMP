class BankAccount:
    def __init__(self, int_rate, balance,name):
        self.int_rate=int_rate 
        self.balance=balance
        self.name=name


    def deposit(self, amount):
        self.balance += amount	
        return self

    def withdraw(self, amount):
            if self.balance - amount > 0:
                self.balance -= amount-5
            else : 
                print("withdrawal amount non-positive")
            return self


    def display_account_info(self):
        if self.balance<0:
            print("withdrawal amount non-positive")
        else : print("balance: ",self.balance)
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * (1 + self.int_rate / 100)
            return self



meme = BankAccount(0.1,100,"mah")
jehad = BankAccount(0.5,200,"jehad")

meme.deposit(100).deposit(200).deposit(300).withdraw(500).yield_interest().display_account_info()
jehad.deposit(200).deposit(100).withdraw(100).withdraw(100).withdraw(100).withdraw(200).yield_interest().display_account_info()