const newEle = document.createElement("h2");
newEle.textContent = "I'm learning javaScript";
// console.log(newEle);

const firstEle = document.getElementById("first");
firstEle.after(newEle);9

const ele3 = document.createElement("h3");
ele3.textContent = "I'm learning DOM";
ele3.id = "third";
ele3.className = "dom";
ele3.className = " July";
ele3.classList.add("multiple");
ele3.classList.add("classes");
ele3.classList.remove("July");

ele3.style.baclgroundColor = "red";
ele3.style.color = "pink";
ele3.style.fontSize = "30px";


newEle.after(ele3);
console.log(ele3.getAttribute("class"));


const child = document.createElement("li");
child.textContent = "Milk"
const list = document.getElementById("list");
list.appendChild(child);

const li2 = document.createElement("li")
li2.textContent = "Butter"
list.appendChild(li2);

const li3 = document.createElement("li")
li3.textContent = "Cheese"
list.prepend(li3);

const li4 = document.createElement("li");
li4.textContent = "Paneer";
child.after(li4);

const arr = ["Sri", "Shubham", "Mike"];
const fragment = document.createDocumentFragment();

const UnorderedList = document.getElementById("list");
for(let name of arr){
    const s = document.createElement("li");
    s.textContent = name;
    fragment.appendChild(s);
}

UnorderedList.appendChild(fragment);


const d1 = document.getElementById("third");
d1.remove();

const mth = document.getElementById("Month");
const nw_mth = document.createElement("li");
nw_mth.textContent = "July";
mth.appendChild(nw_mth);