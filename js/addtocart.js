import { getCart } from "./data/getCart.js";
import { url } from "./script.js";


const itemsInCart = getCart();


const cartContent = document.querySelector(".cartcontainer");
//const itemsInCart = document.querySelector(".cartnumber");


export function addToCart() {




function saveCartItems (cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
}

addToCart();
