// Filename: complex_code.js

// This complex code demonstrates a full-featured e-commerce application,
// including user authentication, product search, cart management, and order processing.

// Constants
const SHIPPING_COST = 5.99;
const TAX_RATE = 0.1;

// User authentication system
let loggedInUser = null;

function login(username, password) {
  // Perform authentication logic here, set loggedInUser if successful
  loggedInUser = { username };
}

function logout() {
  // Clear logged in user data
  loggedInUser = null;
}

// Product data
const products = [
  { id: 1, name: "Product A", price: 10.99 },
  { id: 2, name: "Product B", price: 19.99 },
  { id: 3, name: "Product C", price: 7.99 }
  // ... add more products
];

// Cart management
let cartItems = [];

function addToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  const existingCartItem = cartItems.find((item) => item.productId === productId);

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  console.log("Product added to cart.");
}

function removeFromCart(productId) {
  const index = cartItems.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    cartItems.splice(index, 1);
    console.log("Product removed from cart.");
  } else {
    console.log("Product not found in cart!");
  }
}

function getCartTotal() {
  const total = cartItems.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId);
    return acc + product.price * item.quantity;
  }, 0);

  return total.toFixed(2);
}

// Order processing
function placeOrder() {
  if (!loggedInUser) {
    console.log("Please login first!");
    return;
  }

  if (cartItems.length === 0) {
    console.log("Cart is empty!");
    return;
  }

  const subtotal = parseFloat(getCartTotal());
  const shipping = SHIPPING_COST;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  console.log("Order placed.");
  console.log("Subtotal:", subtotal.toFixed(2));
  console.log("Shipping:", shipping.toFixed(2));
  console.log("Tax:", tax.toFixed(2));
  console.log("Total:", total.toFixed(2));

  // Clear the cart and perform additional order processing logic here
  cartItems = [];
}

// Example usage
login("user123", "password123");
addToCart(1, 2);
addToCart(2, 1);
console.log("Cart Total:", getCartTotal());

removeFromCart(1);
console.log("Cart Total:", getCartTotal());

logout();
placeOrder();
