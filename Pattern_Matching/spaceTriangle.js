// let n = 5
// let i = 1
// while(i <= n){
//     let space = n - i
//     let str = ""

//     //print space
//     while(space){
//         str = str + " "
//         space --
//     }
//     //print stars
//     let j = 1
//     while(j<i){
//         str = str + "*"
//         // console.log(str)

//         j++
//     }
//     i++
//     console.log(str)
// }
// Output:
//    *
//   **
//  ***
// ****

//******************************************************************* */

// let i = 1
// let n= 4

// while(i<=4){
    
//     let space = i -1
//     let str = ""
//     //print space
//     while(space !== 0){
//         str = str + " "
//         space--
//     }
//       //print stars
//     let col = 1
//     while(col <=n-(i-1)){
//         str = str + "*"
//         col++
//     }
//     console.log(str)
//     i++
// }
// Output:
// ****
//  ***
//   **
//    *

///*************************************************************** */

// let i = 1
// let n= 4

// while(i<=4){
    
//     let space = i -1
//     let str = ""
//     //print space
//     while(space !== 0){
//         str = str + " "
//         space--
//     }
//       //print stars
//     let col = 1
//     while(col <=n-(i-1)){
//         str = str + i
//         col++
//     }
//     console.log(str)
//     i++
// }
// Output:
// 1111
//  222
//   33
//    4

//*********************************************************** */

// let n=4
// let row = 1

// while(row <= n){
//     let space = n-row
//     let str = ""
//     //print space
//     while(space){
//         str = str + " "
//         space--
//     }
//     //print stars
//     let col = 1
//     while(col<=row){
//         str = str + row
//         col++
//     }
//     row++
//     console.log(str)
// }
// Output:
//    1
//   22
//  333
// 4444

/************************************************************* */

// let n = 4
// let row = 1
// while(row<=n){
//     let space = row-1
//     let str = ""
//     while(space){
//         str = str + " "
//         space--
//     }
//     //console.log(row)
//     let col = 1
//     let count = row
//     while(col<=n-(row-1)){
//      str = str + count
//      count++
//      col++   
//     }
//     row++
//     console.log(str)
// }
// Ouptut:
// 1234
//  234
//   34
//    4

/***********************************************************/
 
// let n = 4
// let row = 1
//  while(row <= n){
//     let space = n-row
//     let str = ""
//     //print space
//     while(space){
//         str = str + " "
//         space--
//     }
//     //print 1234
//     let col = 1
//     while(col<= row){
//         str = str + col 
//         col++
//     }
//     //print decreasing numbers
//     let col1 = row -1 
//     while(col1){
//         str = str + col1
//         col1--
//     }
//     row++
//     console.log(str)
//  }
//  Output:
//    1
//   121
//  12321
// 1234321

/*************************************************************** */

// let n = 5
// let row = 1
// while(row <= n){
//     let str = ""
//     let j = 1 
//     while(j <= n-(row-1) ){
//         str = str + j
//         j++
//     }
//     //print stars
//     let stars = (row-1)*2
//     while(stars){
//         str = str + "*"
//         stars--
//     }
//     let decreasingNo = n-(row-1)
//     while(decreasingNo){
//         str = str + decreasingNo
//         decreasingNo--
//     }
//     row++
//     console.log(str)
// }
// Output:
// 1234554321
// 1234**4321
// 123****321
// 1********1