function addNumber(...num){
    let sum = 0;
    for(let i=0; i<num.length; i++)
    {
        sum += num[i];
    }
    console.log(sum);
}

addNumber(2,3);
addNumber(2,3,4);
addNumber(2,3,4,5,6);