let a = 3.1415789;
console.log(a.toFixed(2));
console.log(typeof a.toFixed(2));
console.log(a.toPrecision(4));
console.log(a.toString());

let b = new Number(10);
console.log(b);
console.log(typeof b);

console.log(Math.abs(-45));
console.log(Math.max(2,4,5,6));
console.log(Math.floor(2.4));
console.log(Math.ceil(4.5));
console.log(Math.sqrt(4));
console.log(Math.random());

//Gambling Game..............
let s = (Math.random() * 10);
console.log(Math.floor(s));

//OTP Generator
let otp = (Math.random() * 9000) + 1000;
console.log(Math.floor(otp));