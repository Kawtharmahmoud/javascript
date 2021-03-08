let productName=document.getElementById("product-name");
let productDesc=document.getElementById("product-desc");
let prudctSizeSelect =document.getElementById("product-size");
let createForm=document.getElementById("creat-form");
let inputFile=document.getElementById("upload-image-file")
let productSizeValue;
let prudctImage;
prudctSizeSelect.addEventListener("change",getPrudctSizeVlaue);
inputFile.addEventListener("change",UploadImage)
createForm.addEventListener("submit",createPrudctFun);
function getPrudctSizeVlaue(e){
    productSizeValue= e.target.value;
}
function createPrudctFun(e) {
    e.preventDefault();
    let AllPrudcts =JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue =productName.value;
    let descValue = productDesc.value;
    if(nameValue && descValue)
    {
        let obj = {
            id :AllPrudcts ? AllPrudcts.length +1 : 1,
            qty:1,
            imagesUrl:prudctImage,
            size :productSizeValue,
            title:nameValue,
            desc:descValue,
            IsMe:"Y",
            
        };
        let newPrudcts=AllPrudcts ? [...AllPrudcts,obj] : [obj];
        localStorage.setItem("products",JSON.stringify(newPrudcts));
        productName.value = "";
        productDesc.value = "";
        productSizeSelect.value="";
        setTimeout(() =>{
            window.location="index.html";
        },500);
    }
    else{
        alert("Enter Data...")
    }


}

function UploadImage(){
    let file=this.files[0];
    let types=["image/jpeg","image/png"];
    if(types.indexOf(file.type)== -1){
        alert("Type Not Support")
        return;
    }
    if (file.size > 2 * 1024 *1024){
        alert("Image not Exced 2MG")
        return;
    }
    getImagesBase64(file); 
   
   
  //  prudctImage=URL.createObjectURL(file)
}
function getImagesBase64(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload= function(){
        prudctImage=  reader.result;
    };
    reader.onerror=function(){
        alert("Error !!")
    }
}