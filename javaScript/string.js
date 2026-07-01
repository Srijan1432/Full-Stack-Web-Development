let str1 = "Srijan";
let str2 = 'Srijan is a good boy';
const a = 7;
let str3 = `Srijan is full
of emotions ${a}`;
console.log(str3);
console.log(str3.length);
console.log(str3.toUpperCase());
console.log(str3.indexOf("Sri"));

//Extracting substring...........
console.log(str3.slice(2,9));
console.log(str3.substring(2,5));

const name = "Srijan,ABhi,Ayan,SHubham,harsh,yash";
console.log(name.split(","));