const p1 = new Promise((resolve, reject) => {
    reject("hello");
})

.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})