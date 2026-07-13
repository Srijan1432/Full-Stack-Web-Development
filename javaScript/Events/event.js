// function handleClick(){
//     const eve = document.getElementById("first");
//     eve.textContent = "Srijan is learning JavaScript";
// }


const event = document.getElementById("first");
event.addEventListener("dblclick", ()=>{
    event.textContent = "Srijan is learning JavaScript";
});

event.addEventListener("dblclick", ()=>{
    event.style.backgroundColor = "white";
});