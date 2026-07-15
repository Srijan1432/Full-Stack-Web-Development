console.log("hello World");



// const p1 = fetch("https://api.github.com/users");
// const p2 = p1.then((response) => {
//     return response.json();
// })

// p2.then((response) => {
//     console.log(response);
// })

//Chaining promises

fetch("https://api.github.com/users")
.then((response) => {
    if (!response.ok){
        throw new Error("data not found");
    }
    return response.json();
})
.then((data) =>{
    console.log(data);
})

.catch((error) => {
    console.log(error);
})

console.log("Bye world");