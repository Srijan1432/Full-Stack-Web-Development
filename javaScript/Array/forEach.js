const arr = [2,34,5,6,5,6,53,2,4];

arr.forEach((i, index)=>{
    console.log(i, index);
})

let sum = 0;
arr.forEach((i)=>{
    sum = sum + i;
})
console.log(sum);