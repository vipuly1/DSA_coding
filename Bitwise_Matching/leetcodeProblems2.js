//Leetcode reverse a integer

var reverse = function (x) {
  let ans = 0;
  let converted = false;
  if (Math.sign(x) == -1) {
    x = x * -1;
    converted = true;
  }
  while (x) {
    console.log(x);
    let lastDigit = x % 10;

    ans = ans * 10 + lastDigit;

    x = Math.floor(x / 10);
  }
  if (converted) {
    ans = ans * -1;
    return ans;
  } else {
    return ans;
  }
};
console.log(reverse(123));

/************************************************************** */

// Check if the number is a power of 2
var isPowerOfTwo = function(n) {
    
    let ans = 1
    for(let i = 0;i<=30;i++){
        if(ans === n ){
            return true
        }
        ans = ans * 2
        }
    return false
};
/********************************************************** */
//Find the 1's compliment of base 10 integer

// suppose the number is 5 i.e ...000101
// Its 1's compliment will be ...000010 = which is 2

// As we know 1's compliment is ulta of the given bits. 
// So we can do negation. But the negation will also negate the other bits
// So instead of getting  ...000010  we will get ...111010 and this is not 2
// So what we do is take a mask value 0. Its bits ...00000

// Now we run a loop till all the 1 bits are removed by doing right shift. In our case the loop will run 3 Times
// At the same time we perform or operation with 1  with our mask i.e mask | 1.
// Since our loop ran for 3 times, This will add 3 1 bits at the end of the mask

// Now all we have to do is do and operation with the mask and the negation of the number to get the result
// ...111010  & ...000111 = ...000010
 
var bitwiseComplement = function(n) {
    let mask = 0
    let m = n
    if( n  == 0 ){
        return 1
    }
    while(m !==0){
        m = m >> 1 
        mask = (mask  << 1) | 1
    }
    let ans = ~n & mask
    
    return ans
    
};