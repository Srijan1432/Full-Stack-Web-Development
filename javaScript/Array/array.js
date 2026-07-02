let arr = [1,2,3,4,67,8];
console.log(arr);
console.log(arr.length);
console.log(arr[5]);
arr[3] = 45;
console.log(arr);
arr.push("Srijan");
arr.push(true);
console.log(arr);
arr.push(99);
console.log(arr);
arr.pop();
console.log(arr); 

//Adding at starting in array
arr.unshift(false);
console.log(arr);

//delete starting element
arr.shift();
console.log(arr);