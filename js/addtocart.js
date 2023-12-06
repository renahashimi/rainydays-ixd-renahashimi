import { getCart } from "./data/getCart.js";
import { url } from "./script.js";
import { getApiProduct } from "./data/getapiproductsingle.js";


const itemsInCart = getCart();

console.log(itemsInCart);
const cartContent = document.querySelector(".cartcontainer");
let cartItems = document.querySelectorAll(".addtocartbtn");
//const itemsInCart = document.querySelector(".cartnumber");


function addToCart() {

if(!itemsInCart) {
   const cartItems = localStorage.getItem("cartItems");
    

} else {


}


}

addToCart ();
/*function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

};*/


