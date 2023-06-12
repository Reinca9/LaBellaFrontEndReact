import baseTomate1 from "../picturesFolder/baseTomate1.png";
import pizzachoco2  from "../picturesFolder/pizzaChoco2.png";

export class Pizza {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  base: string;
  fullDescription : string;

  constructor(name: string, description: string, price: number, imageUrl: string, base: string, fullDescription: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.base = base;
    this.fullDescription = fullDescription;
  }
}

export const pizzaList: Pizza[] = [
  new Pizza("Olivia", "Base tomate, fromage, olives vertes, olives noires...", 6.0, baseTomate1, "Tomato", "Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Margherita", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato", "Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Raclette", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Raclette", "Base tomate, mozzarella, basilic...", 7.5, baseTomate1, "Tomato","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Pepperoni", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat", "Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat" ,"Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Poulet", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Chocolat","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Crême", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),
  new Pizza("Fruits de mer", "Base tomate, pepperoni, fromage...", 8.0, pizzachoco2, "Creme","Sauce tomate Fromage mozzarella, cheddar, parmesan,   PepperoniChampignons Oignons Olives noires ou vertes Tomates fraîches Basilic Poulet Saucisse italienne Bacon Artichauts Épinards Piments forts jalapeños piments de Cayenne Ananas Ricotta Rouette"),

];