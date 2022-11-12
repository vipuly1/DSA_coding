 // let i = 0
// let n=4
// while(i<n){
//     let j = 0
//     let str = ""
//     while(j<=i){

//         str = str+ i
//         j++
//     }
//     console.log(str)
//     i++
// }

// ***********************************************************************

// let i = 1;
// let n = 4;
// while (i <= n) {
//   let j = 1;
//   let str = "";
//   while (j <= i) {
//     str = str + (i + j - 1);
//     j++;
//   }
//   console.log(str);
//   i++;
// }

// Output
// 1
// 23
// 345
// 4567

// ***********************************************************************

// let i = 1;
// let n = 4;
// while (i <= n) {
//   let j = 1;
//   let str = "";
//   while (j <= i) {
//     str = str + (i - j+ 1);
//     j++;
//   }
//   console.log(str);
//   i++;
// }

// Output
// 1
// 21
// 321
// 4321

// ***********************************************************************

// let i = 1;
// let n = 3;
// while (i <= n) {
//   let j = 1;
//   let str = "";
//   while (j <= n) {
//     str = str + String.fromCharCode(65 + (i+j - 2))
//     j++;
//   }
//   console.log(str);
//   i++;
// }

// Output
// ABC
// BCD
// CDE

// ***********************************************************************

// let i = 1;
// let n = 4;
// let count = 0
// while (i <= n) {
// let j = 1;
//   let str = "";
//   while (j <= i) {
//     str = str + String.fromCharCode(65 + i + j -2)
//     count++
//     j++;
//   }
//   console.log(str);
//   i++;
// }
// Output
// A
// BC
// CDE
// DEFG

// **********************************************************************

// let i = 1;
// let n = 4;
// let k = 4;
// let l = 1;

// while (i <= n) {
//   let j = 1;
//   let str = "";
//   while (j <= i) {
//     str = str + String.fromCharCode(65 + (k + j - 2));
//     j++;
//   }
//   console.log(str);
//   k--;
//   i++;
// }
// Output
// D
// CD
// BCD
// ABCD