import { getCart } from "./data/getCart.js";
import { url } from "./script.js";


const inCartItem = localStorage.getItem("cartItems");


const cartContent = document.querySelector(".cartcontainer");
const totalPrice = document.querySelector(".totalsum");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".content4");
const itemsInCart = document.querySelector(".cartnumber");

console.log(inCartItem);

  cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
  //itemsInCart.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;
  cartContent.innerHTML = "";

if (inCartItem.length === 0){  
  cartContent.innerHTML += `<div class="noitems"><p><No products in cart</p></div>`;
}
   /* cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${cartItems.id}
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
  
*/