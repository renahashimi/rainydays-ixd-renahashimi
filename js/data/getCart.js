export function getCart() {

    let cart = localStorage.getItem("cartItems");

    
    if (!cart) {
        return [];
    } 
};


/*export function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }*/

