import { getApiProduct } from "./data/getapiproductsingle.js";


const cartItems = await getApiProduct();
export const cartContainer = document.querySelector(".cartcontainer");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".content4");



export function renderCartTotal (cartItems){
    
    cartSiteName.innerHTML = "";
    cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
    cartItems = "";

    cartContainer.innerHTML = "";
    cartContainer.innerHTML += `<div class="cartInfo">
                                        <div class="cartcontent">
                                          <div class="cartimage" <img src="url(${cartItems.image})" alt"${cartItems.title}"></div>

                                            <div>
                                              <h2 class="productname">${cartItems.title}</h2>
                                              <p class="productPrice">$${cartItems.price}</p>

                                            </div>

                                          </a>
                                        </div>
                                </div>`;

if (cartContainer.length === 0) {
  cartContainer.innerHTML += `<div><p<No products in cart</p></div>`;
}


}

renderCartTotal(cartItems);