import { getCart } from "./data/getCart.js";
import { url } from "./script.js";
import { getApiProduct } from "./data/getapiproductsingle.js";
import { apiUrl } from "./script.js";


fetch(getApiProduct)
.then(function(response) {
    return response.json();
})
.then(function(data){
    localStorage.setItem("cartItems", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    } 
})





function addToCart() {}


