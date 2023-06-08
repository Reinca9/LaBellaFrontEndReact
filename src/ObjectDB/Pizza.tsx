import baseTomate1 from "../picturesFolder/baseTomate1.png";
import pizzachoco2  from "../picturesFolder/pizzaChoco2.png";

export class Pizza {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  base: string;

  constructor(name: string, description: string, price: number, imageUrl: string, base: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.base = base;
  }
}

export const pizzaList: Pizza[] = [
  new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato"),
  new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
  new Pizza("Raclette", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
  new Pizza("Raclette", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato"),
  new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat"),
  new Pizza("Crême", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme"),

];