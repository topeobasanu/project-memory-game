const cards = document.querySelectorAll('.memory-card');
//codes for storing card
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
//make the card flip
function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

 if (!hasFlippedCard) {
     //first click
     hasFlippedCard = true;
     firstCard = this;
     return;
 }
     //second click
secondCard = this;
checkForMatch();
}

    //refractoring there are nested condition, lets make it easier to read so lets refractor.
function checkForMatch() {
    //do card match?
let isMatch = firstCard.dataset.image ===
     secondCard.dataset.image;

isMatch ? disableCards() : unflipCards();
    //its a match!!!
} 
    //not a match
function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
 resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

       resetBoard();
       
     }, 1500);
     }

function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];

}
  //  lock board
//shuffle
(function shuffle() {
cards.forEach(card => {
let randomPos = Math.floor(Math.random() * 12);
card.style.order = randomPos;
});
})()
cards.forEach(card => card.addEventListener('click', flipCard));