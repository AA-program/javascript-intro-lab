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

for (let i = 0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click", chgColour)
}

function chgColour(ev){
    console.info(ev.target.classList[0]);
    let chosenColour = ev.target.classList[0] + "Back";
    document.body.setAttribute("class", chosenColour);
}

let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg',
];

let imageCounter = 0;
let imageRotator = document.getElementById("myImages");
setInterval(chgImage,3000);

function chgImage(){
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    if (imageCounter < 5){
        imageCounter++;
    }
    else{
        imageCounter = 0;
    }
}