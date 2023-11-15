import { errorMessage } from "./errormessage.js";

const productContent = document.querySelector(".productContent");
const params = new URLSearchParams (document.location.search);
const id = params.get ("id");
const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function getProductInfo () {
  try {
      const response = await fetch(apiUrl);
      const jacket = await response.json();

      createProductInfo (jacket);
      productContent.innerHTML = "";
     
} catch(error) {
  console.log("Unknown error", error);
  productContent.innerHTML = errorMessage();
}
}

//API call for each jacket
function createProductInfo (jacket) {
  setTimeout (function() {
    productContent.innerHTML += `<div id="productName"><h1  class="productName">${jacket.title}<h1></div>
                                    <div class="productImage2" style="background-image: url(${jacket.image})" alt"${jacket.title}"></div>
                                  <div>
                                    <div class="properties">description of <span><br>${jacket.title}</br></span></div> 
                                    <p class="productDetail">${jacket.description}</p>
                                    <div class="infoBox">
                                    <p class="productGender">Gender: ${jacket.gender}</p> 
                                    <p class="productColor">Color: ${jacket.baseColor}</p> 
                                  </div>
                                  <div>
                                    <div><p class="saleText"></p></div>
                                    <div><p class="productPrice2">${"$" + jacket.price}</p></div>
                                    <div class="onSaleSection">
                                    <p id="onSaleSection2">${jacket.discountedPrice + " " + "$"}</p></div>
                                  </div>
                                  <div class="selectbox">
                                    <div class="formbox">
                                      <p class="slcSize">SELECT SIZE</p>
                                     <form class="sizeform">
                                      <select class="sizeSelection" id="sizes">
                                        <option value="sizeXS" id="selectsize2">${jacket.sizes[0]}</option>
                                        <option value="sizeS" id="selectsize2">${jacket.sizes[1]}</option>
                                        <option value="sizeM" id="selectsize2">${jacket.sizes[2]}</option>
                                        <option value="sizeL" id="selectsize2">${jacket.sizes[3]}</option>
                                        <option value="sizeXL" id="selectsize2">${jacket.sizes[4]}</option>
                                      </select>
                                    </form>
                                    </div>
                                    <div>
                                      <a href="cart.html?id=${jacket.id}" id="atc">ADD TO CART</a>
                                    </div>
                                  </div>`;

//Is the jacket on sale ?
let priceText = document.querySelector(".productPrice2");
let onSaleText = document.querySelector("#onSaleSection2");
let saleText = document.querySelector(".saleText");

if (jacket.onSale) {
    priceText.innerHTML = "<strike>" + "(" + priceText.innerHTML + ")" + "</strike>";
    priceText.style.fontSize = "0.8em"
    saleText.innerHTML = "Lucky you, this jacket is actually on sale &#129321"
  } else {
    onSaleText.style.display = "none";
    saleText.style.display = "none";
  }

}, 2500);


//Go back button - for jackets on product.html
const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "  "+ "BACK TO JACKETS";

//Loader only for "Productpage" / "product.html"
const load = document.querySelector(".loader");
const loader = document.querySelector(".loader-indicator");
load.innerHTML = "Your jacket is loading...";

setTimeout (function () {
  loader.classList.remove("loader-indicator")
}, 3000);

setTimeout(function () {
  load.innerHTML = "Is this your new jacket?" + " " + "&#128525"
}, 3000);


} 
getProductInfo()
