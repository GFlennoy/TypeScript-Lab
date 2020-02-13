//(1)Declare an interface called Mountain
interface Mountain {
  //give it properties name(string) & height(number)
  name: string;
  height: number;
}
//(2) Declare an interface called Product
interface Product {
  //give it properties name(string) & price(number)
  name: string;
  price: number;
}
//(3) Declare interface called InventoryItem
interface InventoryItem {
  //contains properties product (from above) & quantity(number)
  product: Product;
  quantity: number;
}
//(1)Declare an array called mountains which is an array of type Mountain
let mountains: Mountain[] = [
  //fill the array with chart info
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];
//(1)Declare function called findNameOfTallestMountain
//(1)One parameter arrayOfMountain objects.
let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight = mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });
  //(1)return string "nameOfTallestMountain" inside given array.
  return nameOfTallestMountain;
};
//(1)store result of function call in a variable
let result = findNameOfTallestMountain(mountains);
//(1)console.log the variable
console.log(result);

//(2)Declare an array called products which is an array of type Product
let products: Product[] = [
  //fill the array with products of your choosing.
  { name: "Tesla X", price: 85000 },
  { name: "BMW 540i", price: 65000 },
  { name: "Porsche Cayenne", price: 67000 }
];
//(2)Declare function called calcAverageProductPrice
//(2)One parameter - an array of Product objects.
let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });
  //return a number, the average price of all products
  return totalPrice / arrayOfProducts.length;
};
//test results.
console.log(calcAverageProductPrice(products));

//(3)Declare an array called inventory which is an array of type InventoryItem
let inventory = [
  //fill array with chart info
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 }
  //should equal 170
];
//declare a function called calcInventoryValue
let calcInventoryValue = (inventoryList: InventoryItem[]): number => {
  let totalPrice = 0;
  let totalQuantity = 0;
  inventoryList.forEach(item => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};
console.log(calcInventoryValue(inventory));
