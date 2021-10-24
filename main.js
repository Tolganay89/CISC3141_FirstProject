
function mouseOver(id) {
    id.style.color = "blue";
    id.style.backgroundColor = "#e25822";
}
function mouseOut(id) {
    id.style.color = "white";
    id.style.backgroundColor = "";
}


//imgaes for the home part
var homeImg = document.getElementById("homeimg");
var homeImgs = ["img/movie.jpg", "img/451Cover.jpg"];
var indexHome = 0;

function imageshomeChanger() {
    homeImg.setAttribute("src", homeImgs[indexHome]);
    indexHome = (indexHome + 1) % homeImgs.length;
}
setInterval(imageshomeChanger, 2000);

