// let arr = [1, 5, 55, 215, 64, 12, 15, 0, -5];

// const minMax = (arr) => {
//   let pointer = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > pointer) {
//       pointer = arr[i];
//     }
//   }
//   return pointer;
// };

// console.log(minMax(arr));

/********************************************************* */

// let arr = [1, 5, 55, 215, 64, 12, 15, 0, -5];
// let toFind = -5
// const find = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === toFind) {
//         return true
//     }
//   }
//   return false;
// };

// console.log(find(arr));

/********************************************************* */
// let arr = [1, 5, 55, 215, 12, 15, 0, -5];
// const reverse = (arr) => {

//   for (let i = 0; i < Math.floor(arr.length/2); i++) {
//     let temp = arr[i]
//     console.log(arr[arr.length - i - 1])
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length -i - 1] = temp

//     }
//   return arr;
// };

// console.log(reverse(arr));

/********************************************************* */

// An array of size 2m +1 elements is given. Means there are elements that are repeating.
// And there is one unique element that is non repeating find that element.

// let arr = [2 ,3 ,1 ,6 ,3 ,6, 2]
// // XOR same element ko XOR karenge to ans 0 aata hai. Hume bas duplicate  nikalna hai
// const findUnique = (arr) =>{
//     let ans = 0
//     for(let i = 0; i<arr.length; i++){
//         console.log(ans)
//         ans = ans^arr[i]
//     }
// }
// console.log(findUnique(arr))

/******************************************************* */

let arr1 = [1, 2, 3, 4, 5, 7, 9];
let arr2 = [2, 2, 3, 5, 5];
const intersection = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } 
    else if (arr1[i] > arr2[j]) {
      j++;
    } 
    else{
        
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }
  return ans;
};
console.log(intersection(arr1,arr2))