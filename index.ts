const formatString = (input: string, toUpper: boolean = true): string => {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
};

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let arr: T[] = [];
  arrays.forEach((item) => {
    arr = [...arr, ...item];
  });
  return arr;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  const valType = typeof value;

  if (valType === "string") {
    return (value as string).length;
  } else {
    return (value as number) * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let highPriceProduct: Product = products[0];
  products.forEach((product) => {
    if (highPriceProduct.price < product.price) {
      highPriceProduct = product;
    }
  });
  return highPriceProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allowed");
    } else {
      setTimeout(function () {
        resolve(n * n);
      }, 1000);
    }
  });
}
