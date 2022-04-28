class user:
    def __init__(self,name,x):
        self.name = name
        self.email = x
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print("name :",self.name,"account_balance :" ,self.account_balance)


meme = user("mah","mahmoud_alessa@yahoo.com")
guido = user("Guido van Rossum", "guido@python.com")
monty = user("Monty Python", "monty@python.com")


meme.make_deposit(100)
meme.make_deposit(200)
meme.make_deposit(300)
meme.make_withdrawal(500)
print(meme.account_balance)
meme.display_user_balance()
#############################################################
guido.make_deposit(800)
guido.make_deposit(300)
guido.make_withdrawal(500)
guido.make_withdrawal(100)
print(guido.account_balance)
guido.display_user_balance()
###############################################################
monty.make_deposit(300)
monty.make_withdrawal(500)
monty.make_withdrawal(100)
monty.make_withdrawal(100)
print(monty.account_balance)
monty.display_user_balance()
###################################################################