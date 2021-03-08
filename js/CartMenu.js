let cartsproductDivdom=document.querySelector(".carts-products div");
let badgedom=document.querySelector(".badge");
let shoppingcarticon=document.querySelector(".shoppingcart");

let cartsproductmenu=document.querySelector(".carts-products");
shoppingcarticon.addEventListener("click",openCartMenu)
// check if items in localstorge
let addedItem=localStorage.getItem("productsincard")
 ? JSON.parse(localStorage.getItem("productsincard")) 
 : [];
if (addedItem){
    addedItem.map((item) =>
   { cartsproductDivdom.innerHTML +=`<p> ${item.title} ${item.qty}</p>`;
});
   badgedom.style.display="block";
   badgedom.innerHTML +=addedItem.length;
}
function openCartMenu(){
    if(cartsproductDivdom.innerHTML !=""){
        if(cartsproductmenu.style.display == "block"){
cartsproductmenu.style.display="none";}
else
{
    cartsproductmenu.style.display="block";}}
}