/* Javascript file 1*/

const xhr = new XMLHttpRequest();

const baseurl = "https://wizard-world-api.herokuapp.com";
const query = "/Elixirs";
const url = baseurl + query;
var harryPotterElixirs;
var index = 0;

xhr.open("GET", url);
xhr.send(null);

xhr.onload = function() {
    console.log("hurray, Elixirs are loaded");
    harryPotterElixirs = JSON.parse(xhr.responseText);
    //console.log(harryPotterElixirs);

    index = getRandomNumber();
    printElixir(index);
    //printIngredients();
    //printInventors();
}

function printElixir(index) {
    var elixirName = document.getElementById("elixirName");
    elixirName.innerHTML = harryPotterElixirs[index].name;

    text = "";
    for (let j = 0; j < harryPotterElixirs[index].ingredients.length; j++) {
        text += harryPotterElixirs[index].ingredients[j].name + ",   ";
    };

    if(text.length == 0) {
        text = "unknown ingredients";
    }
    var elixir = document.getElementById("elixir");
    elixir.innerHTML = "This Cocktail is made up of " + text + " The magical effect it has is that it " + harryPotterElixirs[index].effect + ", its characteristics are " + harryPotterElixirs[index].characteristics + " and it is "+ harryPotterElixirs[index].difficulty +" in difficulty. Its side effects are " + harryPotterElixirs[index].sideEffects
}

const myButton = document.getElementById("myButton");

const myButton2 = document.getElementById("myButton2");
const myButton3 = document.getElementById("myButton3");
const myButton4 = document.getElementById("myButton4");

myButton.addEventListener("click", function() {
    index = getRandomNumber();
    printElixir(index);
    showcase.style.display = "none";
    gallery.style.display = "none";
    galleryImgs.style.display = "none";
});

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

function getRandomNumber() {
    return Math.floor(Math.random() * 146);
}