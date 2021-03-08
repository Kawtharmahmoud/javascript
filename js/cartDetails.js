let products=JSON.parse(localStorage.getItem("products"));
let productId =localStorage.getItem("productId");
let itemDom=document.querySelector(".item-details");
let productDetails= products.find((item)=> item.id == productId);
itemDom.innerHTML = `
<img src="${productDetails.imagesUrl}" alt=""/>
<h2>${productDetails.title} </h2>
<p>${productDetails.desc} </p>
<span> Size :${productDetails.size}</span> <br>
<span> Quantity :${productDetails.qty}</span> <br>
<button  class="add-to-cart" onclick="editPrudct(${productId})"> Edit Product </button>
`;
function editPrudct(id){
    localStorage.setItem("editPrudct",id);
    window.location="editPrudct.html";
}