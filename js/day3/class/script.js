// DOM: Document Object Model
let heading = document.getElementById("heading");
heading.innerText= "Hello Tej"
console.log(heading);

// getelements by class name
let para1 = document.getElementsByClassName("para1");
console.log(para1);
para1[0].innerText="this is first p tag";
para1[1].innerText="this is second p tag";

// get element by tagname

// query selector
let para = document.querySelector("h1 + p");
para.style.color = "red";
para.style.backgroundColor = "black";
para.style.fontSize = "24px";
