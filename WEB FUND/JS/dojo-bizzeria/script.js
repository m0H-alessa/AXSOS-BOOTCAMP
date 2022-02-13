function pizzaoven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaoven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(s1);
var s2 = pizzaoven("hand tossed", "marinaral", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(s2);