// randomGame
// Write a function called randomGame that selects a random number between 0 and 1
// every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.
// If the number is greater than
// .75, stop the timer and console.log the number of tries it took before we
// found a number greater than .75.

const randomGame = ()=>{
//Define a Counter
let counter = 0;
let set = setInterval(function(){
    let num = Math.random();
      counter++
    console.log(num);
if( num >= .75){
    console.log(`What a fun game! It took me ${counter} tries to win the game!`)
    clearInterval(set)
}
},1000)
}

console.log(randomGame());
