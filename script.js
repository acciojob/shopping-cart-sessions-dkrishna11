const products = [
{ id: 1, name: "Product 1", price: 10 },
{ id: 2, name: "Product 2", price: 20 },
{ id: 3, name: "Product 3", price: 30 },
{ id: 4, name: "Product 4", price: 40 },
{ id: 5, name: "Product 5", price: 50 },
];

// Cart data
let cart = [];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

// Render product list
function renderProducts() {
products.forEach((product) => {
const li = document.createElement("li");
li.innerHTML = ${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>;
productList.appendChild(li);
});
}

// Render cart list
function renderCart() {
cartList.innerHTML = "";
cart.forEach((cartItem) => {
const li = document.createElement("li");
li.innerHTML = ${cartItem.name} - $${cartItem.price} <button class="remove-from-cart-btn" data-id="${cartItem.id}">Remove</button>;
cartList.appendChild(li);
});

// Update total price
const cartTotal = cart.reduce((total, cartItem) => total + cartItem.price, 0);
totalPrice.innerText = $${cartTotal};
}

// Add item to cart
function addToCart(productId) {
const product = products.find((product) => product.id === productId);
if (product) {
cart.push(product);
renderCart();
}
}

// Remove item from cart
function removeFromCart(productId) {
cart = cart.filter((cartItem) => cartItem.id !== productId);
renderCart();
}

// Clear cart
function clearCart() {
cart = [];
renderCart();
}

// Initial render
renderProducts();
renderCart();

// Event listeners
productList.addEventListener("click", (event) => {
if (event.target.classList.contains("add-to-cart-btn")) {
const productId = parseInt(event.target.dataset.id);
addToCart(productId);
}
});

cartList.addEventListener("click", (event) => {
if (event.target.classList.contains("remove-from-cart-btn")) {
const productId = parseInt(event.target.dataset.id);
removeFromCart(productId);
}
});

// Clear cart button
const clearCartBtn = document.getElementById("clear-cart-btn");
clearCartBtn.addEventListener("click", clearCart);