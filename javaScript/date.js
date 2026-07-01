const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getSeconds());

const abc = new Date(2025, 9, 7,9,25,16,125);
console.log(abc.toString());


//Time in MiliSeconds.......
const a = Date.now();
console.log(a);