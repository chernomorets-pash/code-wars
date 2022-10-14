// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

let arr = [1,2,3,4,5,6,7,8,9];

function grow(x){
        return x.reduce((result, i) => result * i, 1);
};



const array = [15, 16, 17, 18, 19];
grow(arr);

// function reducer(previousValue, currentValue, index) {
//   const returns = previousValue * currentValue;
//   console.log(
//     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }


