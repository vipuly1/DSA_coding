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