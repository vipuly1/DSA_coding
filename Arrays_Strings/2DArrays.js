/*let arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
const linearSearchIn2DArray = (target) =>{
    for(let row = 0;row < arr.length; row++){
        for(let col = 0;col < arr[0].length; col++ ){
            if(arr[row][col] === target){
                return true
            }
        }
    }
    return false
}
console.log(linearSearchIn2DArray(9))
*/
/**************************************************************************************** */
/*
let arr = [[3,4,11],[2,12,1],[7,8,7]]
const rowWiseSum = (arr)=>{
    let ans = ""
    for(let i = 0; i<arr.length; i++){
        let temp = 0
        for(let j = 0; j < arr[0].length; j++){
            temp += arr[i][j]
        }
        ans = ans + temp + " "
    }
    return ans
}
console.log(rowWiseSum(arr))*/


/*
const largestRowWiseSum = (arr)=>{
    let ans = 0
    let index = -1
    for(let i = 0; i<arr.length; i++){
        let temp = 0
        for(let j = 0; j < arr[0].length; j++){
            temp += arr[i][j]
        }
        if(temp > ans){
            ans = temp
            index = i
        }
    }
    return index
}
console.log(largestRowWiseSum(arr))
*/
/********************************************************************************* */
// Wave Array
/*
let arr = [[3, 4, 11],
          [2, 12, 1],
          [7, 8, 7]]

const waveArray = (arr) => {
    let ans = ""
    let reversed = true
    for (let i = 0; i < arr.length; i++) {
        reversed = !reversed
        console.log(reversed)
        if (i % 2 !== 0) {
            for (let j = arr[0].length - 1; j >= 0; j--) {
                console.log(j,i)
                ans = ans + arr[j][i] + " "
            }
        }
        else {
            for (let j = 0; j < arr[0].length; j++) {
                ans = ans + arr[j][i] + " "
            }
        }
    }
    return ans
}
console.log(waveArray(arr))
*/

/************************************************************************************************************* */
//Spiral Matrix | leetcode | Amazon
/*
var spiralOrder = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let ans = []
    
    let count = 0
    let totalElem = row*col
    
    let startRowIndex = 0
    let endRowIndex = row - 1
    let startColIndex = 0
    let endColIndex = col - 1 

    while(count < totalElem){
        
        for(let i = startColIndex; i<= endColIndex && count < totalElem; i++){
            ans.push(matrix[startRowIndex][i])
            count++
        }
        startRowIndex++
        
        for(let i = startRowIndex; i<= endRowIndex && count < totalElem; i++){
            ans.push(matrix[i][endColIndex])
            count++
        }
        endColIndex--
        
        for(let i = endColIndex; i >= startColIndex && count < totalElem; i--){
            ans.push(matrix[endRowIndex][i])
            count++
        }
        endRowIndex--
        for(let i = endRowIndex ; i>= startRowIndex && count < totalElem; i--){
            ans.push(matrix[i][startColIndex])
            count++
        }
        startColIndex++
    }
    return ans

};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

//Spiral Matrix 2

var generateMatrix = function(n) {
    let totalElem = n*n
    let value = 1
    let ans = []
   
    for(let i = 0 ; i< n; i++){
        ans[i] = []
    }
    
    let startRowIndex  = 0
    let startColIndex = 0
    let endRowIndex = n - 1
    let endColIndex = n - 1
    
   while(value <= totalElem){
       for(let i = startColIndex ; i<= endColIndex ; i++ ){
           ans[startRowIndex][i] = value
           value++
       }
       startRowIndex++
       for(let i = startRowIndex ; i<= endRowIndex ; i++ ){
           ans[i][endColIndex] = value
           value++
       }
       endColIndex--
       
       for(let i = endColIndex ; i>= startColIndex ; i-- ){
           ans[endRowIndex][i] = value
           value++
       }
       endRowIndex--
       for(let i = endRowIndex; i>= startRowIndex ; i--){
           ans[i][startColIndex] = value
           value++
       }
       startColIndex++
   }
    return ans
};
console.log(generateMatrix(3)
*/
 