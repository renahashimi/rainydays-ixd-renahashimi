import { errorMessage } from "./errormessage.js";

const url = "https://api.noroff.dev/api/v1/rainy-days/";
const productSection = document.querySelector(".productSection");  


async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json(); 

    productSection.innerHTML = "";

    for (let i = 0; i <products.length; i++) {
       //(i === 2) - to show more products on page.
     if (i === 2) {
        break;
     }

//API call for every jacket
products.forEach(function (jacket){  
  productSection.innerHTML += ` <div class="jacketInfo">
                                  <div class="jacketContainer">
                                    <a href="product.html?id=${jacket.id}" class="productJacket>
                                    <div class="productname">${jacket.title}</div>
                                    <div class="productImage"style="background-image: url(${jacket.image})" alt"${jacket.title}"></div>
                                    <p class="productPrice">${"$" + jacket.price}</p><div>
                                    <div class="bnBox"><a href="product.html?id=${jacket.id}" id="bn">READ MORE</a></div> 
                                    </a>
                                  </div>
                                </div>`;
                     
});
}} catch(error) {
    console.log("Unknown error", error);
    productSection.innerHTML = errorMessage();
}
// Coded H1-title for women.html page, but couldn´t change it for men.html, without one of them disappearing :/
document.querySelector(".productWoman").innerHTML = "WOMAN"; 
//document.querySelector(".productMen").innerHTML = "MEN"; 
}

getProducts();



