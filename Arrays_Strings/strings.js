const prompt = require("prompt-sync")({ sigint: true });
/*var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    while(i < j){
        if(s[i] === s[j]){
            i++
            j--
        }
        else{
        let temp = s[j]
        s[j] = s[i]
        s[i] = temp
            i++
            j--
        }
    }
    return s
};

*/

/******************************************************************* */
//Check Palindrome of phrase
/*
var isPalindrome = function(s) {
    let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase() //remove non alphanumeric characters
    console.log(replaced)
    let i = 0
    let j = replaced.length -1
    
    while(i<j){
        if(replaced[i] !== replaced[j]) return false
        i++
        j--
    }
    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
*/
/*
const makeLowerCaseChar = () =>{
    let s = prompt("Enter a Char: ")
    let result = s.charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0)
    return  String.fromCharCode(result)
}

console.log(makeLowerCaseChar())
*/

/******************************************************************* */
// remove non alphanumeric characters
// let replaced = ""
// const removeNonAlphaNumChar = (s) =>{
//     for(let i = 0;i<s.length; i++){
//         if((s[i].charCodeAt(0) >= "A".charCodeAt(0) && s[i].charCodeAt(0) <= "Z".charCodeAt(0)) || (s[i].charCodeAt(0) >= "a".charCodeAt(0) && s[i].charCodeAt(0) <= "z".charCodeAt(0)) || (s[i].charCodeAt(0) >= "0".charCodeAt(0) && s[i].charCodeAt(0) <= "9".charCodeAt(0))){
//             replaced = replaced + s[i]
//         }
//     }
//     return replaced
// }
// console.log(removeNonAlphaNumChar("A man, a plan, a canal: Panama"))

/******************************************************************************************* */

// find the character with maximum number of occurence
/*let string = "boobaall"

const maximumOccurence = (string) =>{
    let map = new Map()
    for(let i = 0; i< string.length;i++){
        if(map.has(string[i])){
            let value = map.get(string[i])
            map.set(string[i], value + 1 )
        }
        else{
            map.set(string[i], 1 )
        }
    }
    let ans = ""
    let count = 0
    const iterator1 = map.values()
    const iterator2 = map.keys()
    for(let j = 0; j< map.size; j++){
        
        let value = iterator1.next().value
        let key = iterator2.next().value

        if(value > count){
            count = value
            ans = key
        }
        else if(value === count){
            ans = ans + key
        }
    }
    return ans
}
console.log(maximumOccurence(string)) */

/*                                                OR                                   */
// Using Plain Javascript object
/*
let string = "boobaasssslll";

const maximumOccurence = (string) => {
  let container = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in container) {
      let value = container[`${string[i]}`];
      container[string[i]] = container[string[i]] + 1;
    } else {
      container[string[i]] = 1;
    }
  }
  let ans = "";
  let count = 0;

  for (const key in container) {
    if (container[key] > count) {
      ans = key;
      count = container[key]
    } 
    else if (container[key] === count) {
      ans = ans + key;
    }
  }
  return ans.split("");
};

console.log(maximumOccurence(string));
*/

/************************************************************************************* */
// Replace the spaces with @
/*const string = "My name is Vipul"

const replaceSpace = (s)=>{

        let ans = s.replaceAll(" ", "@")
        return ans
}

console.log(replaceSpace(string))
*/

/************************************************************************ */

// Permutation in String

var checkInclusion = function (s1, s2) {
  const s1Count = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in s1Count) {
      s1Count[s1[i]] = s1Count[s1[i]] + 1;
    } else {
      s1Count[s1[i]] = 1;
    }
  }
  //console.log(s1Count);
 
  let j = 0;
  let windowsize = j - 1 + s1.length;
  let s1Count2 = {};
  for(let k = 0;k < s2.length - 1; k++) {
    for(let j = k; j<= windowsize;j++) {
      if (s2[j] in s1Count2) {
        s1Count2[s2[k]] = s1Count[s2[k]] + 1;
      } else {
        s1Count2[s2[k]] = 1;
      }
    }
    console.log(s1Count, s1Count2)
    console.log(JSON.stringify(s1Count) === JSON.stringify(s1Count2))
    if (JSON.stringify(s1Count) === JSON.stringify(s1Count2)) return true;
  }
  return false
};

console.log(checkInclusion((s1 = "ab"), (s2 = "eidbaooo")));


console.log("ans",JSON.stringify(a) === JSON.stringify(k))
