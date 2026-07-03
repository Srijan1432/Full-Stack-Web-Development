const greetings = ()=>{
    console.log("Hello World");
}

greetings();

const addNumbers = (num1, num2)=>{
    return num1 + num2;
}

console.log(addNumbers(3,5));

let arr = [3,2,5,76,7,2,8,9];
console.log(arr.sort((a,b)=>(a-b)));