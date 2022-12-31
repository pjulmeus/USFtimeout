// countdown
// Write a function called countdown that accepts a number as a parameter and every
// 1000 milliseconds decrements the value and console.logs it.
// Once the value is 0 it should log “DONE!” and stop.


const countDown = (num) =>{
let set = setInterval(() => {
 num--
if(num === 0){
   console.log("DONE!");
   return clearInterval(set)
}else{
 console.log(num);
}
}, 1000);
}
console.log(countDown(4))
