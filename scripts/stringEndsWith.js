// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    // TODO: complete
    return console.log(str.includes(ending, str.length - ending.length))
  }

  solution('abc', 'bc') // returns true
//   solution('abc', 'd') // returns false


// Best solution 
// function solution(str, ending){
//     return str.endsWith(ending);
//   }