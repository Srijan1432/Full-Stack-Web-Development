let arr = [3,4345,57,2,4,24,2,42];
for (let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}

console.log(arr.slice(2,5));
let arr2 = arr.splice(2,4);
console.log(arr);
console.log(arr2);

let brr = [1,2,3];
let brr1 = [7,8,9];
let brr3 = brr.concat(brr1);
console.log(brr3);

//Spread operatoe
let crr = [...arr,...brr,...brr1];
console.log(crr);

let str = ["rohit", 'Sri', "Srijan", "Abhi"];
let s = console.log(str.toString());
console.log(typeof s);

console.log(str.join(" "));
console.log(str.indexOf("Sri"));

str.sort();
console.log(str);
str.reverse();
console.log(str);

let ab = [1,2,3,[4,5,6], [4,34,5,5,[3,45,3]]];
let bd = ab.flat(Infinity);
console.log(bd);