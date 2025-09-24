function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "menu.html";
  } else {
    alert("Please enter username and password");
  }
}

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart!");
}

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    container.innerHTML = cartItems.map(i => `<p>${i}</p>`).join('');
  }
}

function checkout() {
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "menu.html";
}

if (document.getElementById("cartItems")) {
  loadCart();
}
