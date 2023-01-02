// //Segmented Seive
// /*
// let low = 6;
// let high = 10;

// //Seive of Eratothemes method to count primes between a range of numbers starting from zero or 1

// const isPrime = (high) => {
//   let prime = [];
//   high = Math.floor(Math.sqrt(high));
//   let mark = new Array(high + 1).fill(true);
//   mark[0] = mark[1] = false;

//   for (let i = 0; i < mark.length; i++) {
//     if (mark[i]) {
//       prime.push(i);

//       for (let j = 2 * i; j < mark; j = j + i) {
//         mark[j] = false;
//       }
//     }
//   }
//   return prime;
// };

// const SegmentedSeive = (high, low) => {
//   let prime = isPrime(high);
//   let newArr = new Array(high - low + 1).fill(true);

//   for (let i = 0; i < prime.length; i++) {
//     //finding the numbers divisible by the number in prime array that is in between the given range
//     let dividend = Math.floor(low / prime[i]) * prime[i];

//     // if the number that we got is smaller than the lowest number then just add the number that divided to get the next number
//     if (dividend < low) {
//       dividend = dividend + prime[i];
//     }
//     for (let j = dividend; j <= high; j = j + prime[i]) {
//       newArr[j - low] = false;
//     }
//   }
//   let ans = [];
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i]) {
//       ans.push(low + i);
//     }
//   }
//   return ans;
// };
// console.log(SegmentedSeive(high, low));
// */
// // GCD or HCF
// //Eucledian algo states that the 
// //
// //gcd of gcd(a,b) is gcd(a-b,b) or gcd(a%b,b) where, a>b
// // LCM(a,b) * GCD(a,b) = a*b

// const eucledianGCD = (a, b) =>{
//     if(a === 0) return b
//     if(b === 0) return a
//     while(a != b ){
//         if(a > b){
//             a = a-b
//         }
//         else{
//             b = b-a
//         }
//     }
//     if(b === 0) return a
//     return b
// }
// console.log(eucledianGCD(72,24))

function resultAll(arr) {
      let result = 0;
     for (let k = 0; k < arr.length; k++) {
       for (let m = 0; m < arr[ k ].length; m++) {
       if( arr[ k ][ m ]%2 === 1 ) result += (arr[ k ][ m ]); 
       }
   }
       return result;
    }
    
  console.log(resultAll ( [ [1, 2], [3, 4], [5, 6, 7] ] ));
