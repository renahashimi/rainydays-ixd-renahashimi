export async function getApiProduct () {

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");
const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;

      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
}; 
getApiProduct();

