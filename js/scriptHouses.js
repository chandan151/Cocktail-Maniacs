/* Javascript file 2*/

const xhr1 = new XMLHttpRequest();

const baseurl1 = "https://wizard-world-api.herokuapp.com";
const query1 = "/Houses";
const url1 = baseurl1 + query1;
var harryPotterHouses;
var index = 0;

xhr1.open("GET", url1);
xhr1.send(null);

xhr1.onload = function() {
    console.log("hurray, it worked!");
    harryPotterHouses = JSON.parse(xhr1.responseText);
    console.log(harryPotterHouses);
}

const myButton1 = document.getElementById("myButton1");

myButton1.addEventListener("click", function() {
    if (showcase.style.display === "none") {
      printHouses();
      showcase.style.display = "block";
      galleryImgs.style.display = "none";
      gallery.style.display = "none";
    } else {
      showcase.style.display = "none";
      gallery.style.display = "none";
      galleryImgs.style.display = "none";
    }
});

function printHouses() {
}