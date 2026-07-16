async function github(){
    console.log("Hello world");
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
}

github();

console.log("Hii Sri");