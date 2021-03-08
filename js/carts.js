
let productsdom =document.querySelector(".products");
let noproductsdom= document.querySelector(".noProducts");

function drawcartproductsUI(allproducts = []){
    if(JSON.parse(localStorage.getItem("productsincard")).length === 0)
    noproductsdom.innerHTML ="There is No Item";
    let products =JSON.parse(localStorage.getItem("productsincard")) || allproducts;
    let productsui =products.map((item) => {
return `
            <div class="product-item">
                <img src="${item.imagesUrl}" class="product-item-img" alt="image"/>
                <div class="product-item-desc">
                    <h2> ${item.title} </h2>
                    <p>${item.desc} </p>
                    <span> Size: ${item.size}</span> <br>
                    <span>  Quntatit: ${item.qty}</span>
                </div>
                <div class="product-item-action">
                    <button class="add-to-cart" onclick="RemovefromCart(${item.id})">Remove from CarT</button>
                    
                </div>
            </div>



`;
 

    });
    productsdom.innerHTML=productsui.join("");
}
drawcartproductsUI();
function RemovefromCart(id){
    let productsincard =localStorage.getItem("productsincard");
  if (productsincard ){
        let items=JSON.parse(productsincard);
    let fillteritem =items.filter((item) => item.id !== id);
   localStorage.setItem("productsincard",JSON.stringify(fillteritem)); 
    drawcartproductsUI(fillteritem);
}
}