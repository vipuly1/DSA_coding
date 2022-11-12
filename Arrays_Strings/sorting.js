/* selection sort
var sortColors = function(nums) {

    for(let i = 0;i<nums.length - 1;i++){
        temp = i 
        for(let j= 0; j<nums.length;j++){
            if(nums[j] < nums[temp]){
                temp = j
            }
        }
            let newTemp = nums[temp]
            nums[temp] = nums[i]
            nums[i] = newTemp
    }
    return nums
};
*/

/* Bubble Sort */
// for best case senario when the array is already sorted.
// in that case if there is no swapping that means the array is sorted.
/*
var sortColors = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      console.log(i, j);
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
*/

/*Insetion Sort*/
const insertionSort = (arr) =>{
  let i = 1
 
  while(i< arr.length){
    let j = i-1
    let curr = arr[i]
    while(j >= 0){
      console.log("curr", curr)
      if(curr < arr[j]){
        arr[j+1]  = arr[j]  // shifting
        j--
      }
      else{
        break
      }
    }
    arr[j+1] = curr
    i++
  }
 return arr
}

console.log(insertionSort([4,11,6,15,2,1]))

// 1 2 4 