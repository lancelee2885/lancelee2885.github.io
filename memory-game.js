"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

let gameBoard = document.getElementById("game");

const colors = shuffle(COLORS);

createCards(colors);

/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - an click listener for each card to handleCardClick
 */

function createCards(colors) {
  //create a grid that contains 10 inline blocks with different set of colors
  const gameBoard = document.getElementById("game");
  for (let color of colors) {
    let colorTiles = document.createElement("div");
    colorTiles.className = color;
    colorTiles.setAttribute("id", "hidden-color");
    gameBoard.appendChild(colorTiles);
  }
  //adding an event listener when one of blocks being clicked
  addEventListener("click",handleCardClick);

}


/** Flip a card face-up. */
function flipCard(card) {
  // ... you need to write this ...
  if (event.target.id == "hidden-color"){
    event.target.id = "cardFlipped";
  } 
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // if numbers of cards being flipped is less than 2 --> can flip
  if (document.querySelectorAll("#cardFlipped").length < 2){
    flipCard(event);
  }

  // if numbers of cards being flipped is equal to 0 --> can't flip --> either lock the cards if they are matching,
  //                                                                --> or unflip if they are not.
  if (document.querySelectorAll("#cardFlipped").length == 2){
    let flippedCard = document.querySelectorAll("#cardFlipped");

    // if cards matching --> change the id to done so it does not count toward "#cardFlipped"
    if (flippedCard[0].className === flippedCard[1].className){
      flippedCard[0].id = "done";
      flippedCard[1].id = "done";
      // if numbers of id#"done" is 10 --> all cards are matched --> display winning message
      setTimeout(function() {
        if(document.querySelectorAll("#done").length == 10){
          alert("You Won");
        }
      }, 100);
    } else {            
      // card not matching --> unflip the cards by adding id "hidden-color" back.
      function unFlipCard(card) {
        flippedCard[0].id = "hidden-color";
        flippedCard[1].id = "hidden-color";
      }
      // show the cards for half a second before unflip
      setTimeout(unFlipCard,500)
    }
  }
}


