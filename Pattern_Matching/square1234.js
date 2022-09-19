let n = 5
let i = 1
let count = 0
while(i<n){
    let j = 1
    let str = ""
    while(j<=n){
        count++
        str = str + count
        
        j++
    }
    console.log(str)
    i++
}