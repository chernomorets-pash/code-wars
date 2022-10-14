// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// function getMiddle(s){
//     return s.length % 2 != true ? s.slice(s.length/2 -1, s.length/2 +1) : s.slice(s.length/2, s.length -3) ;
// }
// let getMiddle = s => s.length % 2 != true ? s.slice(s.length/2 -1, s.length/2 +1) : s.slice(s.length/2, s.length -3) ;

// function getMiddle(s){
//     let res;
//     switch (s) {
//         case (s.length % 2 != true) :
//             res = s.slice(s.length/2 -1, s.length/2 +1);
//             break;
//         case (s.length % 2 == true) :
//             res = s.slice(s.length/2, s.length -3);
//             break;
//         case (s.length == 1) :
//             res =s ;
//             break;
//     } 
//     return res;
// }


// 
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
getMiddle('test');
getMiddle('testing');
getMiddle('testing');