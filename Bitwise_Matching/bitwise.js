//Fibonacci Series 

// let n = 10
// let result = ""
// let a = 0
// let b = 1
// console.log(a)
// console.log(b)
// for(i=0; i<n; i++){
//     let nextNo = a+b
//     console.log(nextNo)
//     a = b
//     b = nextNo

// }

/************************************************************** */

// Check for prime no

// let n=7 
// let isPrime = 1
// for (let i=2; i<n; i++){
//     if(n%i === 0){
//         console.log("The give no is not a prime no")
//         isPrime = 0
//         break;
//     }
// }
// if(isPrime == 1 ){
//     console.log("prime no")
// }

/******************************************************* */

for(let i = 0; i<=55; i= i+2){
    console.log(i)
    if(i&1){
        continue
    }
    console.log("hii")
    i++
 
}