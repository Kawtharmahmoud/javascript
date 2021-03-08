
let productsdom =document.querySelector(".products");
let noproductsdom= document.querySelector(".noproducts");

function drawfavoritesProductsUI(allproducts = []){
    if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0)
    noproductsdom.innerHTML ="There is No Item";
    let products =JSON.parse(localStorage.getItem('productsFavorite')) || allproducts;
    let productsui =products.map((item)=>{
return `
            <div class="product-item">
                <img src="${item.imagesUrl}" class="product-item-img" alt="image"/>
                <div class="product-item-desc">
                    <h2> ${item.title} </h2>
                    <p>new phone y9 </p>
                    <span> Size: ${item.size}</span> <br>
                    <span>  Quntatit: ${item.qty}</span>
                </div>
                <div class="product-item-action">
                    <button class="add-to-cart" onclick="Removefromfavorite(${item.id})">Remove from Favorite</button>
                    
                </div>
            </div>



`;
 

    });
    productsdom.innerHTML=productsui.join("");
}
drawfavoritesProductsUI();
function Removefromfavorite(id){
    let productsFavorite =localStorage.getItem("productsFavorite");
  if (productsFavorite ){
        let items=JSON.parse(productsFavorite);
    let fillteritem =items.filter((item) => item.id !== id);
   localStorage.setItem("productsFavorite",JSON.stringify(fillteritem)); 
   drawfavoritesProductsUI(fillteritem);
}
} 