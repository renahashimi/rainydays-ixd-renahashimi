import { getCart } from "./data/getCart.js";
import { url } from "./script.js";
import { getApiProduct } from "./data/getapiproductsingle.js";


const itemsInCart = getCart();


const cartContent = document.querySelector(".cartcontainer");
//const itemsInCart = document.querySelector(".cartnumber");


export function addToCart() {

if(!itemsInCart) {
   const cartItems = localStorage.getItem("cartItems");
    

} else {

    
}


}

addToCart ();
/*function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

};*/


