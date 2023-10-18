console.log('Hello World!');

const xhr = new XMLHttpRequest();

const baseurl = "https://wizard-world-api.herokuapp.com";
const query = "/Houses";
const url = baseurl + query;
var harryPotterHouses;
var index = 0;

xhr.open("GET", url);
xhr.send(null);

xhr.onload = function() {
    console.log("hurray, it worked!");
    //console.log(xhr.responseText);
    harryPotterHouses = JSON.parse(xhr.responseText);
    console.log(harryPotterHouses);

    harry.innerHTML = "The name of house is " + harryPotterHouses[index].name + " and the founder is " + harryPotterHouses[index].founder + " and the head of house is " + harryPotterHouses[index].heads[1].firstName + " and the house ghost is " + harryPotterHouses[index].houseGhost + " and the house colors are " + harryPotterHouses[index].colors + " and the house mascot is " + harryPotterHouses[index].mascot + " and the house values are " + harryPotterHouses[index].values + " and the house members are " + harryPotterHouses[index].members + " and the house id is " + harryPotterHouses[index].id;
}