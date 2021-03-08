let products=JSON.parse(localStorage.getItem("products")) || productsDB;
let productId=JSON.parse(localStorage.getItem("editPrudct"));
let getPrudct=products.find((i) => i.id == productId);
let productName=document.getElementById("prudct-name");
let productDesc=document.getElementById("prudct-desc");
let prudctSizeSelect =document.getElementById("prudct-size");
let updateForm=document.getElementById("update-form");
let inputFile=document.getElementById("upload-image-file")
let productSizeValue;
let prudctImage;
productName.value=getPrudct.title;
productDesc.value=getPrudct.desc;
prudctSizeSelect.value=getPrudct.size;
prudctImage=getPrudct.imagesUrl;
prudctSizeSelect.addEventListener("change",getPrudctSizeVlaue);
updateForm.addEventListener("submit",UpdatePrudctFun);
inputFile.addEventListener("change",UploadImage)

function getPrudctSizeVlaue(e){
    productSizeValue= e.target.value;
}
function UpdatePrudctFun(e) {
    e.preventDefault();
    getPrudct.title=productName.value;
    getPrudct.desc=productDesc.value;
    getPrudct.size=prudctSizeSelect.value;
    getPrudct.imagesUrl=prudctImage;

    localStorage.setItem("products",JSON.stringify(products));

    setTimeout(() =>{
        window.location="index.html";
    },500);

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
    };
}