const cartContent = document.querySelector(".cartcontainer");
const totalPrice = document.querySelector(".totalsum");
const cartSiteName = document.querySelector(".cartsitename");
const backToShop = document.querySelector (".backtoshop");



  cartSiteName.innerHTML += `<h1>SHOPPINGBAG</h1>`;
  cartContent.innerHTML = "";
  backToShop.innerHTML = "";
  backToShop.innerHTML += `<div><h2> GO BACK TO </h2>
                            <div class ="backtoshoplist">                              
                              <p><a href="women.html">woman</a></p>
                              <p><a href="index.html">homepage</a></p>
                              <p><a href="men.html">men</a></p>
                            </div>`;

  cartContent.innerHTML += `<div><p class="noitems">No products in cart</p></div>`;



let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItems);

export function addToCart (){
 let image = cartItems[id];

 console.log(image);


if (!cartItems) {
  cartItems = [];
} else {

  cartItems = JSON.parse(cartItems);
}
}

localStorage.setItem("cartItems", JSON.stringify(cartItems));
 
/*    localStorage.getItem("cartItems");
    cartContent.innerHTML += `<div class="cartcontainer" jacket-id="${cartItems.id}
                                     <div class="cartInfo">
                                       <div class="cartcontent">
                                         <div class="cartimage" <img src="url(${cartItems.image})" alt"${cartItems.title} cover"></div>
   
                                           <div>
                                             <h2 class="productname">${cartItems.title}</h2>
                                             <p class="productPrice">$${cartItems.price}</p>
   
                                           </div>
                                           </div>
                                           <div class="removebtn">remove</div>   
                                         </a>
                                         </div>
                               </div>`;
 };



saveCartItems(cartItems);
}
function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(product));

};*/
 