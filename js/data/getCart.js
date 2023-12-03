export function getCart() {

    const cartItems = localStorage.getItem("cartItems");
    
    if (!cartItems) {
        return null;
    }
};


/*export function saveCartItems (cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }*/

