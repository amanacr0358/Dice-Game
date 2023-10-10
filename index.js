// we need to write the logic here
// 1. we give default images to the dice.
// catch the elements first.
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

// let's get the old scores first if we have any
let score1 = localStorage.getItem('score1')||0;
let score2 = localStorage.getItem('score2')||0;
updateTable();

// give new source to the images.
// setAttribute() is a method we use to change th attributes of html elements
// elementname.setAttribute('attribute name', 'value');

img1.setAttribute("src", "./images/6.png");
img2.setAttribute("src", "./images/6.png");

// "./images/" + number + ".png"
// "./images/" + 2 + ".png";

// 2. adding event to the document so that the images get changed whenever we press the keyboard.
// the event is keydown for this application
// we need to add this event to the whole document because we are pressing the keyboard on the whole body of the document.

document.addEventListener("keydown", function () {
  // we need to generate random number between 1 & 6.

  // we use math.random() method to generate random numbers.
  // math.random generates numbers between 0 & 1
  // so, in order to get a number between 0 & 6 we multiply the math.random with 6.
  // Math.random()*6;
  // Math.ceil(Math.random()*6);
  // console.log(Math.ceil(Math.random()*6));

  // we are generating random scores for the players.
  let player1 = Math.ceil(Math.random() * 6);
  let player2 = Math.ceil(Math.random() * 6);

  // we give image sources to the players.
  // we divided the source of the image into 3 parts
  // first part contains the folder details.
  // second part contains the file name.
  // third part contains the format of the file.
  let src1 = "./images/" + player1 + ".png";
  let src2 = "./images/" + player2 + ".png";

  // we give sources to the player images.

  img1.setAttribute("src", src1);
  img2.setAttribute("src", src2);

  // we catch the heading to change it's value to winner details.
  let heading = document.querySelector(".container>h1+p+h2");

  // we declare the winner
  if (player1 == player2) {
    heading.textContent = "Draw!";
  } else if (player1 > player2) {
    heading.textContent = "Player 1 Wins!!!";
    // we increment the score
    score1++;
    // we store the score in local storage
    localStorage.setItem('score1',score1);
    // we update the display
    updateTable();
  } else {
    heading.textContent = "Player 2 Wins!!!";
    // we increment the score
    score2++;
    // we store the score in local storage
    localStorage.setItem('score2',score2);
    // we update the display
    updateTable();
  }
});

function updateTable() {
  // this function only updates the table.
  let score1 = localStorage.getItem('score1')||0;
  let score2 = localStorage.getItem('score2')||0;
  // we catch the leaderboard elements
  let p1 = document.querySelector("#score1");
  let p2 = document.querySelector("#score2");
  //   we update the text content
  p1.textContent=score1;
  p2.textContent=score2;
}

// reset
// we catch the reset element first
let reset = document.querySelector("table+p");
// we add event to it
reset.addEventListener("click", function () {
  // we reset the images
  img1.setAttribute("src", "./images/6.png");
  img2.setAttribute("src", "./images/6.png");
  // we make the scores 0
  score1 = 0;
  score2 = 0;
  //   we remove scores from local storage
  localStorage.clear();

  // we update the table
  updateTable();
});


// every local storage application will have these values

// 1. script file values
// 2. local storage values