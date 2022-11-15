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

// let arr1 = [1, 2, 3, 4, 5, 7, 9];
// let arr2 = [2, 2, 3, 5, 5];
// const intersection = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   let ans = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       i++;
//     }
//     else if (arr1[i] > arr2[j]) {
//       j++;
//     }
//     else{

//       ans.push(arr1[i]);
//       i++;
//       j++;
//     }
//   }
//   return ans;
// };
// console.log(intersection(arr1,arr2))
/******************************************************* */
//Pair sum. Find the numbers whose is equal to the given no.

// let arr = [1, 2, 3, 4, 5]

// let customSort =(arr)=>{
//   for(let i = 0; i<arr.length;i+=2){
//     if(arr[i] > arr[i+2]){
//       let temp = arr[i]
//       let temp1 = arr[i+1]
//       arr[i] = arr[i+2]
//       arr[i+1] = arr[i+3]
//       arr[i+2] = temp
//       arr[i+3] =  temp1
//     }
//   }
//   return arr
// }

// const s = 5
// const pairSum = (arr) =>{
//   let ans = []
//   for(let i = 0; i<arr.length;i++){
//       let element = arr[i]
//     for(let j = i+1; j<arr.length;j++){
//       if((element + arr[j]) === s){
//           if(arr[i] < arr[j]){
//             ans.push(arr[i])
//             ans.push(arr[j])
//           }
//           else{
//             ans.push(arr[j])
//             ans.push(arr[i])
//           }
//       }

//     }
//   }

// return customSort(ans)
// }

// console.log(pairSum(arr))

/******************************************************* */

//Triplet sum. Find the numbers whose is equal to the given no.

/*************************************************************/

// let arr = [0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0]

// const sort01 = (arr) =>{
//   let i = 0
//   let j = arr.length - 1

//   while( i < j){
//     if(arr[i] > arr[j]){
//       let temp = arr[j]
//       arr[j] = arr[i]
//       arr[i] = temp
//       i++
//       j--
//     }
//     else if(arr[i] == 0){
//      i++
//     }
//     else if(arr[j] == 1){
//       j--
//     }
//   }
//   return arr
// }

// console.log(sort01(arr))

/************************************************ */
/*
let arr = [0,0,1,1,1,1,1,0,0,0,2,0,1,0,2,2,0,2,2,0,2,0]

const sort012 = (arr) =>{

  for(let i = 0; i<arr.length;i++){
    for(let j = i; j<arr.length;j++){
      if(arr[i] > arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(sort012(arr))
*/
/************************************************************ */

/*Reverse the array*/
/*
let arr = [1, 3, 2, 4, 5, 6, 7];

const reverseArray = (arr) => {
  let j = arr.length - 1;
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    j--;
  }
  return arr
};
console.log(reverseArray(arr));
*/
/******************************************************************************** */
// let nums = [1,2,3,4,5,6,7]
// let k  = 3

// var rotate = function(nums, k) {
//   let start = nums.length-1
//   while(k>0){
//       let currElem = nums.pop()
//       nums.unshift(currElem)
//       k--
//   }
//   return nums
// };
// console.log(rotate(nums, k))

/*************************************** */

/*Rotate a array. All test cases passed on leetCode but time limit exceeded
So for easy mode good for medium mode you need to find different approach*/

// var rotate = function(nums, k) {
//   let start = nums.length-1
//   k = k%nums.length
//   while(k>0){
//       let currElem = nums.pop()
//       nums.unshift(currElem)
//       k--
//   }
// };

// const rotate =(nums, k)=>{
//   let newArr = Array(nums.length)
//   for(let i = 0;i<nums.length;i++){
//       let m = (i + k)%nums.length
//       newArr[m] = nums[i]
//       console.log(newArr)
//   }
//   return newArr
// }

// console.log(rotate([1,2,3,4,5], 3))

//Merge two sorted Arrays

// var merge = function(nums1, m, nums2, n) {
//   let result = []
//   let i = 0
//   let j = 0
//   while(i<m && j<n){
//       if(nums1[i] <= nums2[j]){
//           result.push(nums1[i])
//           i++
//       }
//       else{
//           result.push(nums2[j])
//           j++
//       }
//   }
//   while(i<m){
//       result.push(nums1[i])
//       i++
//   }
//   while(j<n){
//       result.push(nums2[j])
//       j++
//   }

//   return result
// };
// console.log(merge([1,2,3],3,[2,5],2))

/****************************************************************************** */
//Check if array is sorted and rotated

// var check = function(nums) {
//we have to check for pair.
// pair is when a flow is present i < i+1...  // 1pair // array is sorted
//  Also, we have to check if the array is sorted and rotated.
// To check it we have to check if the last element is smaller than the
// first element

//   if(nums.length === 1) return true
//   let count = 0
//   for(let i=1; i<nums.length; i++){
//       if(nums[i-1] >  nums[i]){
//         console.log(count)
//           count++
//       }
//       if(i == nums.length -1 && count === 0){
//         console.log("Hi")
//           return true
//       }
//   }
//   if(nums[nums.length - 1] <= nums[0]){
//       console.log(count)
//       count++
//   }
//   return count === 2
// };
// console.log(check([3,6,10,1,8,9,9,8,9]))

/***********************************************************************/

// Find the sum of two arrays such that all the array no are taken as collective one number

//Method 1
/*const twoSum = (arr1, arr2)=>{
    let i = arr1.length-1
    let j = arr2.length -1
    let ans = []
    let carry = 0
    while(i>=0 && j>=0){
      let sum = arr1[i] + arr2[j] + carry
      carry = Math.floor(sum/10)
      sum = sum % 10
      ans.unshift(sum)
      i--
      j--
    }
    while(i>=0){
      let sum = arr1[i] + carry
      carry = Math.floor(sum/10)
      sum = sum % 10
      ans.unshift(sum)
      i--

    }
    while(j>=0){
      let sum = arr2[j] + carry
      carry = Math.floor(sum/10)
      sum = sum % 10
      ans.unshift(sum)
      j--
    }
    while(carry != 0){
      let sum = carry 
      carry = Math.floor(sum/10)
      sum = sum % 10
      ans.unshift(sum)
     }
return ans
}

console.log(twoSum([7,2,3,4],[7,2,3,4]))   */

//Method 2
/*
const twoSum = (arr1, arr2)=>{
  let arr1No = 0
  let arr2No = 0
  for(let i = 0;i<arr1.length;i++){
    arr1No = arr1No * 10 + arr1[i]
  }
  for(let j = 0;j<arr2.length;j++){
    arr2No = arr2No * 10 + arr2[j]
  }
  ans = String(arr1No + arr2No)
  let a = Array.from(String(ans), Number)
  return a
}
console.log(twoSum([7,2,3,4],[7,2,3,4]))     
*/

/********************************************************* */

// Two sum
/*
let arr = [4, 6, 8, 12, 5, 6];
let target = 9;

const twoSum2 = (arr, target) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let secVal = String(target - arr[i]); 
    if (secVal in obj) {
      return [i, obj[secVal]];
    } else {
      obj[arr[i]] = i;
    }
  }
  return -1;
};

console.log(twoSum2(arr, target));
*/

/**************************************************************************** */
// Minimum moves
const N = 3 
const arr1 = [3,1,5]
const arr2 = [2,7,4]

const minimumMoves = (arr1, arr2, N) =>{
  let moves = 0
  for( let i = 0; i< arr1.length; i++){
    moves = arr2[i] - arr1[(i+1)%N] + moves
  }
  return moves
}
console.log(minimumMoves(arr1, arr2, N))