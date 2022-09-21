// var subtractProductAndSum = function(n) {
//     let product = 1
//     let sum = 0
//     while(n !== 0){
//         let i = n%10
//          product = product * i
//          sum = sum + i
        
//        n = Math.floor(n/10)
//     }
//      return product - sum
//  }

//  console.log(subtractProductAndSum(234))

/************************************************************* */
// Number of 1 bits
var hammingWeight = function(n) {
    let result =  0
    console.log(n)
    while(n !== 0){
        if(n&1){
            result++
        }
        n = n >>> 1
    }
    return result
};
console.log(hammingWeight(11111111111111111111111111111101))