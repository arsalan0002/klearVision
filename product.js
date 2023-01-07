var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName('small-img');

function showImage(){
    mainImg.src = smallImg[0].src;
}
function showImage2(){
    mainImg.src  = smallImg[1].src;
}
function showImage3(){
    mainImg.src  = smallImg[2].src;
}
function showImage4(){
    mainImg.src  = smallImg[3].src;
}
function pageChage() {
    window.location.href= "product page.html";
}

var mainImg = document.getElementById('mainImg');
var image1 = document.getElementById('image1');

function detail() {
    mainImg.scr = image1.src;

}