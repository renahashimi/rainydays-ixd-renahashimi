/* ALL THE WRONG CODES



      numberOfItems.innerHTML =  `<p class="carttotal"> ${numberOfItemsNow.length}`;
    
      numberOfItems.innerHTML += `<p class="carttotal"> ${numberOfItemsNow.length}`;
      */
      



/*const params = new URLSearchParams (window.location.search);
const id = params.get ("id");
const productId = "https://api.noroff.dev/api/v1/rainy-days/" + id;


const cartContainer = document.querySelector(".cartcontainer");
const cartContent = document.querySelector(".cartcontent");
const backToShop = document.querySelector (".content4");
const totalSum = document.querySelector(".totalsum");
const removeItem = document.querySelector(".remove");


console.log(productId);

const cart = [];
      cart.push(productId);

      console.log(cart);



export function getCart() {

    const cartContainer = document.querySelector(".cartcontainer");
    if (!cartContainer) {
        return;
    }


    let cart = JSON.parse(localStorage.getItem("cart")) 

if (!cart) {
    cartContainer.innerHTML += `<div><h2>No products in cart</h2></div>
                                    <a href="index.html">Go back to shopping</a>`;   
} else {
    cartContainer.innerHTML += `<div class="cartInfo">   
                                <a href="product.html?id="${data.id}">
                                    <div> 
                                        <img src="${cartItem.image}" alt"${cartItem.title}"
                                        <div class="cartname">${cartItem.title}</div>
                                    </div>
                                </a>   
                                <div><p class="productPrice">${"$" + cartItem.price}</p><div>
                                
                        
                            </div>`;

}

}
getCart();



/*    const productInCart = productInCartItems.find(function(cart) {
     return
  });

  if (!productInCart) {
      const product = {id: cartId, title: cartTitle, image: cartImage, price: cartPrice};
      productInCartItems.push(product);
      saveCartItems(productInCartItems);
      itemsInCart.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;
  } 
else {
     const newProductsInCart = productInCartItems.filter((product) => product.id !== cartId);
     saveCartItems (newProductsInCart);
     itemsInCart.innerHTML = `<p class="cartitemnumber"> ${inCartItem.length} </p>`;
  }
}


export function saveGetCart() {
    localStorage.setItem("jacket", JSON.stringify(cart));
};

saveGetCart();


export function addToCart(productId) {
    let inCartItem;
    cart.push(productId);
    localStorage.setItem("cart")
    

    cart.forEach((cartItem) => {
        if (productId === inCartItem.productId){
            inCartItem = cartItem;
            return;
        }
        
    });

    if (inCartItem) {
        inCartItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }

}


export function renderCartTotal () {

    let cartTotal = 0;

    cart.forEach((cartItem) => {
       cartTotal += cartItem.quantity;
       document.querySelector(".totalSum").innerHTML = "(${cartItem.quantity})´"
    });

}
renderCartTotal();


/*


const cartItems = getCart();
const cartContainer = document.querySelector(".cartcontainer");
const cartContent = document.querySelector(".cartcontent");
const backToShop = document.querySelector (".content4");
const totalSum = document.querySelector(".totalsum");
const removeItem = document.querySelector(".remove");


backToShop.innerHTML += `<a href="index.html">Go back to shopping</a>`;
removeItem.innerHTML += `<button><i class="fa-solid fa-xmark" style="color: #0a3641;"></i></button>`;




backToShop.innerHTML += `<a href="index.html">Go back to shopping</a>`;
removeItem.innerHTML += `<button><i class="fa-solid fa-xmark" style="color: #0a3641;"></i></button>`;
cartContainer.addEventListener("click", function (e) {

cartItems.forEach(cartItem => {


    if (cartItems.length === 0) {
        cartContainer.innerHTML += `<div><p<No products in cart</p></div>
                                    <a href="index.html">Go back to shopping</a>`;
    
    }


    cartContainer.innerHTML += `<div class="cartInfo">   
                                <a href="product.html?id="${cartItem.id}">
                                    <div> 
                                        <img src="${cartItem.image}" alt"${cartItem.title}"
                                        <div class="cartname">${cartItem.title}</div>
                                    </div>
                                </a>   
                                <div><p class="productPrice">${"$" + cartItem.price}</p><div>
                                
                        
                            </div>`;
  
   
});

if (cartItems.length === 0) {
    cartContainer.innerHTML += `<div><p<No products in cart</p></div>
                                <a href="index.html">Go back to shopping</a>`;

}




});


*/
