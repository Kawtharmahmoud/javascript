
//define products


let productsDom =document.querySelector(".products");

let products= productsDB;
 

//drawproductsUI;


let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
      <div class="product-item" style="border: ${
        item.IsMe === "Y" ? "2px solid green" : ""
      }">
        <img
          src="${item.imagesUrl}"
          class="product-item-img"
          alt="image"
        />
        <div class="product-item-desc">
          <a onclick='SaveItemData(${item.id})'>${item.title}</a>
          <p>${item.desc}</p>
          <span> Size: ${item.size} </span>
          ${
            item.IsMe === "Y" &&
            "<button class='edit-product' onclick='editPrudct(" +
              item.id +
              ")'> Edit Product </button>"
          }
        </div>
        <div class="product-item-action">
          <button class="add-to-cart" onclick="addedToCart(${
            item.id
          })">Add To Cart</button>
          <i class="favorite far fa-heart" style="color: ${
            item.liked == true ? "red" : ""
          }" onclick="addedtofavorite(${item.id})"></i>
        </div>
      </div>
    `;
  });

  productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);
function SaveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "CartDetails.html";
}

function addedToCart(id){
    if(localStorage.getItem("username")){
        let products=JSON.parse( localStorage.getItem("products")) || products;
        let product=products.find((item) => item.id === id);
        let IsProductInCart=addedItem.some((i) => i.id===product.id);// some same for find but return true or false
        if(IsProductInCart){
            addedItem=addedItem.map((p)=> {
               if( p.id === product.id)
               p.qty += 1;
               return p;
            });
        } else{

            addedItem.push(product); }
          //remove old then add new 
          cartsproductDivdom.innerHTML ="";
        addedItem.forEach((item) =>
        {
            cartsproductDivdom.innerHTML +=`<p> ${item.title} <span class='item-qty'>${item.qty}</span></p>`;
        });
       // addedItem=[...addedItem,chooseitem];
       // let uniqueProduct=getUniqueArr(addedItem,"id");
        localStorage.setItem("productsincard",JSON.stringify(addedItem));//localstorage just store string not object
       
       //Add counter of item
        let cartsproductitem=document.querySelectorAll(".carts-products div p");
        badgedom.style.display="block";
       badgedom.innerHTML=cartsproductitem.length;
       // window.location="cardproduct.html";
    }
    else{
        window.location="login.html";
    } 
}
function getUniqueArr(arr,filterType){
    let unique=arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
    return unique;
}



// search 
//13 mean Enter
let input=document.getElementById("search");
input.addEventListener("keyup",function(e){
   search(e.target.value,JSON.parse(localStorage.getItem("products")));
    if (e.target.value.trim() === "")
    drawProductsUI(JSON.parse(localStorage.getItem("products")));
    
});

function search(title,myArray){
   // for (i=0;i<myArray.length;i++){
     //   if(myArray[i].title==title){
        let Arr=myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
        drawProductsUI(Arr);
    
}
// add to favorite
let favoritItems=localStorage.getItem("productsFavorite")
 ? JSON.parse(localStorage.getItem("productsFavorite")) 
 : [];


function addedtofavorite(id){
    if(localStorage.getItem("username")){
        let chooseitem=products.find((item) => item.id === id);
        chooseitem.liked = true;
        favoritItems=[...favoritItems,chooseitem];
        let uniqueProduct=getUniqueArr(favoritItems,"id");
        localStorage.setItem("productsFavorite",JSON.stringify(uniqueProduct));//localstorage just store string not object
        products.map((item) => {
            if(item.id === chooseitem.id){
                item.liked = true;
            }
        });
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products);
       // window.location="cardproduct.html";
    }
    else{
        window.location="login.html";
    } 
}
// Filter Prudct By Size 
let sizeFilter =document.getElementById("size-filter");
sizeFilter.addEventListener("change",getPrudctFilterBySize);

function getPrudctFilterBySize(e){
   let val= e.target.value;
   let products=JSON.parse( localStorage.getItem("products")) || productsDB;
   if (val ==="all"){
    drawProductsUI(products);
      
   }
   else{
     products=products.filter((i)=>i.size === val)
     drawProductsUI(products)
}
}
function editPrudct(id){
    localStorage.setItem("editPrudct",id);
    window.location="editPrudct.html";
}
