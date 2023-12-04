import { getCart } from "./data/getCart.js";
import { url } from "./script.js";


const inCartItem = getCart();


const cartContent = document.querySelector(".cartcontainer");
const totalPrice = document.querySelector(".totalsum");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".backtoshop");
const itemsInTotal = document.querySelector(".cartnumber");

console.log(inCartItem);

  cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
  cartContent.innerHTML = "";
  backToShop.innerHTML = "";
  backToShop.innerHTML += `<div><h2> GO BACK TO </h2>
                            <div class ="backtoshoplist">                              
                              <p><a href="women.html">woman</a></p>
                              <p><a href="index.html">homepage</a></p>
                              <p><a href="men.html">men</a></p>
                            </div>`;


if (!inCartItem) {
  localStorage.getItem("cartItems");
  cartContent.innerHTML += `<div><p class="noitems">No products in cart</p></div>`;
  //itemsInTotal.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;


}else {
  inCartItem.forEach(cartItems => {
    cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${cartItems.id}
                                     <div class="cartInfo">
                                       <div class="cartcontent">
                                         <div class="cartimage" <img src="url(${cartItems.image})" alt"${cartItems.title} cover"></div>
   
                                           <div>
                                             <h2 class="productname">${cartItems.title}</h2>
                                             <p class="productPrice">$${cartItems.price}</p>
   
                                           </div>
                                           </div>
   
                                         </a>
                                         </div>
                               </div>`;
 });
saveCartItems(cartItems);
}
function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

};
 
