//console.info("Ali Abbas");
//console.dir(document);
//document.getElementById("myHeading").innerHTML="Ali Abbas"
//console.info(document.getElementById("myHeading").innerHTML = "Ali Abbas");
//document.querySelector("nav ul li").setAttribute("class", "currentPage");
//document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
const myHeading = document.getElementById("myHeading");
myHeading.innerText = "Hello, world!";

let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

//colourButtons.forEach(button => {
    button.style.backgroundColor = "red";
//});

for (let button of colourButtons) {
    button.style.backgroundColor = "blue";
}