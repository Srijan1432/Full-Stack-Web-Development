let obj = {
    name : "Srijan",
    age : 21,
    cgpa : 7.4
};
console.log(obj);
console.log(obj.age);

// Adding new values
obj.email = "abc@gmail.com";
console.log(obj);

//Update value
obj.age = 22;
console.log(obj);

//Delete 
obj.ab = 45;
console.log(obj);
delete obj.ab;
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));