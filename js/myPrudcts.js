//let prudcts=JSON.parse(localStorage.getItem('products')) || productsDB;
let productsdom =document.querySelector(".products");
let noproductsdom= document.querySelector(".noProducts");

let drawproductsUI;
(drawproductsUI=function (products=[]){
    let myPrudcts=products.filter((item)=> item.IsMe ==="Y");
    if(myPrudcts.lenght != 0){
    let productsui =myPrudcts.map((item) => {
return `
            <div class="product-item" style="border: ${item.IsMe === "Y" ? "1px solid green" : ""}">
                <img 
                src="${item.imagesUrl}" 
                class="product-item-img" 
                alt="image"/>
                <div class="product-item-desc">
                    <a onclick='SaveItemData(${item.id})'> ${item.title} </a>
                    <p>${item.desc} </p>
                    <span> Size: ${item.size}</span>
                    
                     <button class='edit-prodctbtn' onclick='editPrudct(${item.id})'> Edit Product </button> 
                     <br>
                     <button class='edit-prodctbtn' onclick='DeletePrudct(${item.id})'> Delete Product </button> 
                </div>
               
            </div>
`;
    });
    productsdom.innerHTML=productsui.join("");//join for delete point come frpm local storage
}
else{
    noproductsdom.innerHTML="NO Prudct!!"
}
})(JSON.parse(localStorage.getItem("products"))|| productsDB);

function editPrudct(id){
    localStorage.setItem("editPrudct", id);
    window.location="editPrudct.html";
}
function DeletePrudct(id){
    let products=JSON.parse(localStorage.getItem("products")) || productsDB;
    let myPrudcts=products.filter((item)=> item.IsMe === "Y");
  let filtered=  myPrudcts.filter((i)=> i.id !== id);
     let clickedItem =myPrudcts.find(i=> i.id === id);
     products=products.filter((item) => item.id !== clickedItem.id);
    localStorage.setItem("products",JSON.stringify(products))
    drawproductsUI(filtered);
}