/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];
//Task 1: Filter Products by Availability
function filterProducts(inputArr, callbackFunction) {
 return inputArr.filter(callbackFunction);
}
//Task 2: Transform Product Names
const uppercasedNames = products.map(function(product) {
 return product.name.toUpperCase();
});
//Task 3: Generate Discounted Prices
function applyDiscount(discountPercent) {
 return function(product) {
   return product.price * (1 - discountPercent / 100);
 };
}
const discountedProducts = products.map(applyDiscount(20));
//Task 4: Calculate Total Inventory Value
const totalValue = products.reduce(function(total, product) {
 if (product.inStock) {
   return total + product.price;
 }
 return total;
}, 0);
//Console Test Your Work
console.log("Filtered products:", filterProducts(products, function(product) { return product.inStock; }));
console.log("Uppercased names:", uppercasedNames);
console.log("Discounted products:", discountedProducts);
console.log("Total value in stock:", totalValue);
