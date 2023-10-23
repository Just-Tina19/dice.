function play() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

// images/dice1.png - dice6.png
var randomImageSource= "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);

    // dice1.png-dice6.png
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

// images/dice1.png - dice6.png
var randomImageSource= "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);




    // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// dice1.png-dice6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src",randomImageSource2);


// To change inner HTML

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("&#128681player1 won!");
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("Player2 won!&#128681");
}
else {
    document.querySelector("h1").innerHTML = ("Draw!")
}



}