// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
*/
const emptyArray = [];
//const nameArray = ["Guadalupe","Ollie","Aki"];

let cards;
function writeCards(nameArray, event){
    for (let n = 0; n < nameArray.length; n++){
        cards = (`Thank you, ${nameArray[n]}, for the wonderful ${event} gift!`);
        emptyArray.push(cards)
      }

    return emptyArray;
}
function countDown(n){
  let count = 11;
  let i = 0;
    while ( i < 11) {
    count--
    console.log(count);
    i++;
   }
return count;
}