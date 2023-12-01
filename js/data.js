function getCart() {
    let cartSummary = localStorage.getItem("cart");
    let cart = JSON.parse(cartSummary);

    return cart;
}