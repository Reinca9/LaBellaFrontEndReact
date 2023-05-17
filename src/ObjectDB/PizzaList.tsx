import Pizza from './Pizza';

class PizzaList {
  pizzas: Pizza[];

  constructor() {
    this.pizzas = []; // Initialize an empty array to store pizzas
  }

  addPizza(pizza: Pizza) {
    this.pizzas.push(pizza); // Add a pizza to the list
  }

  getAllPizzas(): Pizza[] {
    return this.pizzas; // Return all pizzas in the list
  }
}

// Usage
const pizzaList = new PizzaList();
const pizza1 = new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, "../picturesFolder/baseTomate1.png", "Tomato");
const pizza2 = new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, "../picturesFolder/pizzaTrad.png", "Tomato");
const pizza3 = new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, "../picturesFolder/baseTomate2.png", "Tomato");

pizzaList.addPizza(pizza1);
pizzaList.addPizza(pizza2);
pizzaList.addPizza(pizza3);

const allPizzas = pizzaList.getAllPizzas();
console.log(allPizzas);

export default PizzaList;