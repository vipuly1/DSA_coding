//Binary Search Implementation

// const binarySearch = (arr, key) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     console.log(start, end);

//     let mid = Math.floor(start + (end - start) / 2); // This is the optimised formula to find mid to overcome the range exceeding problem
    
//     if (arr[mid] == key) {
//       return mid;
//     }
//     if (arr[mid] > key) {
//       end = mid - 1;
//     } 
//     else if (arr[mid] < key) {
//       start = mid + 1;
//     }
//   }
//   return -1;
// };
// const arr = [1, 2, 5, 26, 28];
// const key = 21;

// console.log(`Index of ${key} is `, binarySearch(arr, key));

/*******************************************************************/

//Find the first and last occurence of an element in a given array

// const searchRange = function(nums, target) {
    
//   const first = firstOccurence(nums, target)
//   const last = lastOccurence(nums, target)
//   return [first, last]
// };

// const firstOccurence = (nums, target) =>{
//   let ans = -1
//   let start = 0
//   let end = nums.length - 1
//   while(start <= end){
//       let mid = Math.floor((start + end) / 2)
//       if(nums[mid] === target){
//           ans = mid
//           end = mid - 1
//       }
      
//       if(nums[mid] < target){
//           start = mid + 1
//       }
//       else if(nums[mid] > target){
//           end = mid - 1
//       }
//   }
//   return ans
// }

// const lastOccurence = (nums, target)=>{
//   let ans = -1
//   let start = 0
//   let end = nums.length - 1
//   while(start <= end){
//       let mid = Math.floor((start + end) / 2)
//       if(nums[mid] === target){
//           ans = mid
//           start  = mid + 1
//       }
//       if(nums[mid] < target){
//           start = mid + 1
//       }
//       if(nums[mid] > target){
//           end = mid - 1
//       }
//   }
//   return ans
  
// }
// console.log(searchRange([5,6,6,7,7,8,8,11,46,55], 6))

// We can find the total no of occurences with the help of this. 
// formula (firstOccurence - lastOccurence) + 1

/******************************************************************************************* */
// Peak index in a Mountain array 


// var peakIndexInMountainArray = function(arr) {
//   let start = 0
//   let end = arr.length - 1
  
//   while(start <= end){
//       let mid =  Math.floor((start + end )/2)
      
//       if(arr[mid +  1]> arr[mid]){
//         start = mid + 1
//     }
//     else if( arr[mid - 1] > arr[mid]){
//         end = end - 1
//     }
//     else{
//         return mid
//     }
//   }
// };
// console.log(peakIndexInMountainArray([0,2,1,0]))

/****************************************************************** */

//Find Minimum in Rotated Sorted Array

//There are two conditions in the array.
//i In the first condition the element is increasing from start
//ii in between there is a break and then new sorted numbers start.
// so we first check if the middle is in the first condition. If yes then we move the start to reach the smaller number sorted elements
//It the mid is already in the smaller elements then we decrease the end.

// var findMin = function(nums) {
//     let start = 0
//     let end = nums.length - 1
//      while(start < end ){
//          let mid = Math.floor((start + end)/2)
//          console.log("mid", mid)
//          if(nums[mid] >= nums[0]){
//              start = mid + 1
//          }
//          else{
//              end = mid 
//          }
//          console.log("start",start)
//      }
//     if( start === end &&  nums[start - 1] <  nums[start]) return nums[0]
//     else return nums[start]
// };
// console.log(findMin([3,1,2]))

/********************************************************************** */

// Find the element in a rotated sorted array.

/**************************************************************** */

//Find square  root

/*
var mySqrt = function(x) {
  let start = 0
  let end = x
  let ans = 0
  while(start<=end){
      let mid = Math.floor((start + end)/2)
      if(mid*mid === x){
          return mid
      }
      if(mid*mid > x){
          end = mid - 1
      }
      if(mid*mid < x){
          ans = mid
          start = mid + 1
      }
  }
  return precision(ans, 2,x)
};
//The upper code will give only round figure value so we need to find the precision

const precision = (tempAns, precision, x) =>{
  console.log(tempAns,precision,x)
  let factor = 1
  let ans = tempAns
  for(let i = 0 ;i<precision;i++){
    factor = factor/10
    for(let j = ans; j*j < x; j= j+factor){
      
      ans = j
    }
    
  }
  console.log(ans)
  return ans
}
console.log(mySqrt(37))  

/*************************************************************************** */

//Book allocation Problem

//The mid  is said to be not a possible solution if we require more m value to complete the partition. 
//In such case we do start = start + 1 to decrease the search space.

//We know that the solution is going to be between the 0 - sum of all the pages. So we take that range as our initial search space
//Later we reduce the search space based on our requirement

//if possible solution then store the ans and decrease the end = mid


// let n = 4
// let m = 2
// let arr = [10,20,30,40]

// const bookAllocation=(arr, n, m)=>{
//   let start = 0
//   let end = 0
//   let ans = -1

//   for(let i = 0; i<arr.length;i++){
//     end = end + arr[i]
//   }

//   while(start <= end){
//     let mid = Math.floor((start+end)/2)

//     if(isPossibleSolution(arr,n,m,mid)){
//       end = mid - 1
//       ans = mid 
//     }
//     else{
//       start = mid + 1
//     }
//   }
//   return ans
// }

// const isPossibleSolution = (arr, n, m, mid) =>{
//    let studentCount = 1
//    let pageSum = 0
//   for(let i = 0 ; i<n; i++){
//       if(pageSum + arr[i] <= mid){
//           pageSum += arr[i]
//       }
//       else{
//         studentCount++
//         if(studentCount > m || arr[i] > mid){
//           return false
//         }
//         else{
//           pageSum = arr[i]
//         }
//       }
//   }
//   return true

// }
 
// console.log(bookAllocation(arr, n, m))

/*********************************************************** */

// Minimum no of days to manke m bouquets ----- solved on leetcode. (vipuly1)

/************************************************************** */

//Painters Partition Problem

let arr = [5,5,5,5]
let k = 2
const paintersPartiton = (arr, k ) =>{
  let start = 0
  let end = 0
  let ans = -1

  for (let i = 0; i< arr.length; i++){
      end += arr[i]
  }

  while(start<= end){
    let mid = Math.floor((start + end)/2)

    if(isPossibleSolution(arr,mid,k)){
      end = mid - 1
      ans = mid
    }
    else{
      start = mid + 1
    }
  }
  return ans
}

const isPossibleSolution=(arr,mid,k)=>{
  console.log(mid)
  let paintersCount = 1
  let sectionToBePaintedSum = 0

  for(let i = 0; i<arr.length; i++){
    if(sectionToBePaintedSum + arr[i] <= mid){
      sectionToBePaintedSum += arr[i]
    }
    else{
      paintersCount++
      if(paintersCount > k || arr[i] > mid ){
        return false
      }
      else{
        sectionToBePaintedSum = arr[i]
      }
    }
  }
  return true
}
console.log(paintersPartiton(arr, k))