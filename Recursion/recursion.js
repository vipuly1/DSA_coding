// const factorial = (n)=>{
//     if(n == 0){
//         return 1
//     }
//     return n *  factorial(n - 1)
    
// }

// console.log(factorial(10))

// const powerOfTwo = (n) => {
//     if(n == 0){
//         return 1
//     }
//     return 2 * powerOfTwo(n - 1)

// }
// console.log(powerOfTwo(3))
/*
const print = (n) =>{
    //base case
    if( n == 0){
        return 
    }
    //recursion
    print(n- 1)
    console.log(n - 1)
    
}
let result = 1
for(let i = 1; i <= 5; i=i+1){
    result = result*2
}

console.log(result)
*/
// Fibonacci Series
/*
const fibonacci = (n) =>{
    if(n == 0){
        return 0
    }
    if( n === 1){
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(8))

*/
// climb stairs leetcode
/*
const climbStairs = (n) =>{
    if(n === 1) return 1
    if( n === 0) return 1
    let last_step = 1
    let second_last_step = 1
    let ans = 1
    for( let i = n- 1; i>= 1;i--){
         ans = second_last_step + last_step
        last_step = second_last_step
        second_last_step = ans
    }
    return ans
}
console.log(climbStairs(5))

// Recursion method
const climbStairsRecurr = (n) =>{
if( n < 0) return 0  
    if( n === 0) return 1 // jaha hai wahi pahauchne ke liye wahu udi maarega... to ek step

    return climbStairs(n - 1) + climbStairs(n - 2)   

}
    console.log(climbStairsRecurr(4))
*/

// Say Digits.
// Given an input number return that number in words. 412  "four one two"
/*
const SayDigits = (n) =>{
    const numberMap = new Map()
    numberMap.set(0,"zero")
    numberMap.set(1, "one")
    numberMap.set(2, "two")
    numberMap.set(3, "three")
    numberMap.set(4, "four")
    numberMap.set(5, "five")
    numberMap.set(6, "six")
    numberMap.set(7, "seven")
    numberMap.set(8, "eight")
    numberMap.set(9, "nine")
    
    let ans = ""
    if( n/10 < 1){
        ans = numberMap.get(n%10)
        console.log("base", n , ans)
        return ans
    }
     
    return ans = ans + SayDigits(Math.floor(n/10))+" " + numberMap.get(n%10)

return ans
}

console.log(SayDigits(412))

*/
/*
let ans = ""
const SayDigits = (n) =>{
    const digitMap = ["zero", "one","two", "three", "four", "five", "six","seven", "eight", "nine" ]
    if( n == 0 ) return
    let digit = Math.floor(n/10)
    let number = n % 10
    SayDigits(digit)
    ans = `${ans} ${digitMap[number]}`
    return ans.trim()
}
console.log(SayDigits(412))
*/

//Check if the array is sorted using recursion
/*
let arr = [2,4,5,5,7,9]
let size = 6

const isSorted = (arr, size)=>{
    if(size == 0 || size === 1 ) return true   
    if(arr[0] > arr[1]) return false
    else{
    arr.shift()
    return isSorted(arr, size = size - 1)
    }
}
console.log(isSorted(arr, size))
*/

// Calculate the sum of the array elements
/*
const arr = [2,4,9,9,9]
let size = 5
const totalSum = (arr, size) =>{
    if(size == 0) return 0
    if( size == 1) {
        return arr[0]
    }
    let digit = arr[0]
    arr.shift()
    let sum = digit + totalSum(arr, size - 1)
    return sum
}
console.log(totalSum(arr, size))


//Linear Search using recursion

const linearSearchRecurr = (arr, key) =>{
    console.log(arr[0])
    if(arr[0] === key) return true
    
    if(arr.length === 0 ) return false
    console.log(arr)
    arr.shift()
     return linearSearchRecurr(arr, key)
}

console.log(linearSearchRecurr([1,5,4,6,8,9], 5))
*/

//Binary Search using recursion.
/*
arr = [1,4,5,6,8,9,14]

const binarySearchRecurr = (arr, start, end, target) =>{
    if(start > end) return false
    let mid = Math.floor(start + (end - start)/2)
    if(arr[mid] === target){
        return true
    }
    else if(arr[mid] > target){
        return binarySearchRecurr(arr, start, mid -1, target )
    }
    else{
        return binarySearchRecurr(arr, mid + 1, end, target)
    }

}

console.log(binarySearchRecurr(arr,0,arr.length - 1,7))

*/
// Reverse a String
/*
const reverseStringRecurr = (str, i , j) =>{
    if(i == j){
        return str[j]
    }

    reverseStringRecurr(str, i = i + 1, j)
    console.log(str[i])
   return str[0]

}
console.log(reverseStringRecurr("lmnopqrs", 0, 7))
*/
// Check Palindrome
/*
const boolCheckPalindrome = (str, i , j) =>{
    if( i > j) return true

    if(str[i] === str[j]){
        return boolCheckPalindrome(str, i = i+1, j = j - 1)
    }
    else{
        return false
    }
}
console.log(boolCheckPalindrome("aabbaa",0,5))
*/
// Bubble Sort using Recursion
/*
const bubbleSortRecurr = (arr , j) =>{
    if(j == 1 || j == 0) return 
    for (let i = 0 ; i<j-1 ; i++){
        if(arr[i] > arr[i+1]){
           [ arr[i], arr[i+1] ]= [arr[i+1], arr[i]]
        }
    }
    bubbleSortRecurr(arr, j = j - 1)
    return arr
}
console.log(bubbleSortRecurr([1,5,2,8,7,9,16,4],8) )
*/

// Selection sort using Recursion
/*
const arr= [1,5,2,8,7,9,16,4]
const selectionSortRecurr = (arr, start) =>{
    if(arr.length - 1 == start) return
    for(let i = start; i<arr.length; i++){
        if(arr[i] < arr[start]){
            [arr[i], arr[start]] = [arr[start], arr[i]]
        }
    }
    selectionSortRecurr(arr, start = start+1)
    return arr
}
console.log(selectionSortRecurr(arr,0))
*/
// Insertion Sort using recursion
const arr= [1,5,2,8,7,9,16,4]

const insertionSortRecurr = (arr,start) =>{
    if(start == arr.length) return 
    let curr = arr[start]
    let curr_back = start - 1
    for(let i = curr_back; i>=0;i-- ){
        if(curr < arr[i]){
            arr[i + 1] = arr[i]
        }
        else{
            curr_back = i
            break
        }
        
    }
    arr[curr_back + 1]  = curr
    console.log(arr)
    insertionSortRecurr(arr,start = start + 1)
    return arr
}
console.log(insertionSortRecurr(arr,1))
