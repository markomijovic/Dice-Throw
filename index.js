function getRandomInt(min, max) {
    /*
    Generates a random number between an inclusive range
    https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
    // Get random numbers to simulate dice throw
    var num1 = getRandomInt(1, 6);
    var num2 = getRandomInt(1, 6);

    // Names of the dice images corresponding to the number
    var dice1 = "images/dice" + num1.toString() + ".png";
    var dice2 = "images/dice" + num2.toString() + ".png";

    // Update the images
    document.querySelector("img.img1").setAttribute("src", dice1);
    document.querySelector("img.img2").setAttribute("src", dice2);

    // Set the winner text
    var result = "";
    if (num1 > num2) {
        result = "Player 1 Wins!";
    } else if (num1 < num2) {
        result = "Player 2 Wins!";
    } else {
        result = "It's a Tie!";
    }
    document.querySelector(".container h1").innerHTML = result;
}

window.onload = function () {
    play();
};
