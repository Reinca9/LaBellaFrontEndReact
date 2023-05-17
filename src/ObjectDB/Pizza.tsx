class Pizza {
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
  
  export default Pizza;