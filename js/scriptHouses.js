/* Javascript file 2*/

const xhr1 = new XMLHttpRequest();

const baseurl1 = "https://wizard-world-api.herokuapp.com";
const query1 = "/Houses";
const url1 = baseurl1 + query1;
var harryPotterHouses;
var count = 0;

xhr1.open("GET", url1);
xhr1.send(null);

xhr1.onload = function() {
    console.log("hurray, Houses are loaded");
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
  var houses = document.getElementById("showcase");
  text = "";
    for (let count = 0; count < harryPotterHouses.length; count++) {
       text += "<br>" + " Store "+ (count+1) + ": " + harryPotterHouses[count].name + ", It is managed by " + harryPotterHouses[count].founder + ". The head cook of this store is " + harryPotterHouses[count].heads[0].firstName + " " + harryPotterHouses[count].heads[0].lastName + ". It is located in " + harryPotterHouses[count].commonRoom + " that is colured in " + harryPotterHouses[count].houseColours + " Colors and is guarded by " + harryPotterHouses[count].ghost + " and " + harryPotterHouses[count].animal + ". The main element of this store is " + harryPotterHouses[count].element + "<br>"
    }
  houses.innerHTML = text;
}

/*houses.innerHTML = "The name of Store is " + harryPotterHouses[index].name + " and the founder is " + harryPotterHouses[index].founder + " and the head of Store is " + harryPotterHouses[index].heads[1].firstName + " and the store colors are " + harryPotterHouses[index].colors*/