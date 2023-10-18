/* Javascript file*/

const xhr = new XMLHttpRequest();

const baseurl = "https://wizard-world-api.herokuapp.com";
const query1 = "/Houses";
const query2 = "/Elixirs";
const url = baseurl + query2;
var harryPotterHouses;
var harryPotterElixirs;
var index = 0;

xhr.open("GET", url);
xhr.send(null);

xhr.onload = function() {
    console.log("hurray, it worked!");
    harryPotterElixirs = JSON.parse(xhr.responseText);
    //console.log(harryPotterElixirs);

    printElixirs();
    //printIngredients();
    //printInventors();
}

function printElixirs() {
    var elixir = document.getElementById("elixir");
    elixir.innerHTML = "The name of the elixir is " + harryPotterElixirs[index].name + " and the ingredients are " + harryPotterElixirs[index].ingredients[0].name + " and the price is " + harryPotterElixirs[index].price + " and the id is " + harryPotterElixirs[index].id;
}

//const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");
const myButton3 = document.getElementById("myButton3");
const myButton4 = document.getElementById("myButton4");

myButton2.addEventListener("click", function() {
    if (showcase.style.display === "none") {
      printIngredients();
      showcase.style.display = "block";
      galleryImgs.style.display = "none";
      gallery.style.display = "none";
    } else {
      showcase.style.display = "none";
      gallery.style.display = "none";
      galleryImgs.style.display = "none";
    }
});

myButton3.addEventListener("click", function() {
    if (showcase.style.display === "none") {
      printInventors();
      showcase.style.display = "block";
      gallery.style.display = "block";
      galleryImgs.style.display = "none";
    } else {
      showcase.style.display = "none";
      gallery.style.display = "none";
      galleryImgs.style.display = "none";
    }
});

myButton4.addEventListener("click", function() {
    if (galleryImgs.style.display === "none") {
        galleryImgs.style.display = "block";
    } else {
        galleryImgs.style.display = "none";
    }
});


function printIngredients() {

    var text = [];
    for (let i = 0; i < harryPotterElixirs.length; i++) {
        for (let j = 0; j < harryPotterElixirs[i].ingredients.length; j++) {
            //text += harryPotterElixirs[i].ingredients[j].name + ",   ";
            text.push(" " + harryPotterElixirs[i].ingredients[j].name);
        }    
    }
    text.sort();
    text = removeDuplicates(text);
    //console.log(text);

    var ingredients = document.getElementById("showcase");
    ingredients.innerHTML = text;
}

function printInventors() {

    var text = [];
    for (let i = 0; i < harryPotterElixirs.length; i++) {
        for (let j = 0; j < harryPotterElixirs[i].inventors.length; j++) {
            text.push(" " + harryPotterElixirs[i].inventors[j].firstName + " " + harryPotterElixirs[i].inventors[j].lastName);
        }    
    }
    text.sort();
    text = removeDuplicates(text);
    //console.log(text);

    var inventors = document.getElementById("showcase");
    inventors.innerHTML = text;
}


function removeDuplicates(arr) {
    return [...new Set(arr)];
  }


// harry.innerHTML = "The name of house is " + harryPotterHouses[index].name + " and the founder is " + harryPotterHouses[index].founder + " and the head of house is " + harryPotterHouses[index].heads[1].firstName + " and the house ghost is " + harryPotterHouses[index].houseGhost + " and the house colors are " + harryPotterHouses[index].colors + " and the house mascot is " + harryPotterHouses[index].mascot + " and the house values are " + harryPotterHouses[index].values + " and the house members are " + harryPotterHouses[index].members + " and the house id is " + harryPotterHouses[index].id;