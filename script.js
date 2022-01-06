//1) Select the section with an id of container without using querySelector.

console.log(document.getElementById("container"));

// 2) Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

//3) Select all of the list items with a class of "second".

console.log(document.getElementsByClassName("second"));

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

console.log(document.querySelector("ol .third"));

// 5) Give the section with an id of container the text "Hello!".

// document.getElementById("container").innerText = "Hello";
//The line of code above is commented out, since it conflicts with question 10

// 6) Add the class main to the div with a class of footer.
const addMainClass = document.querySelector(".footer");
addMainClass.classList.add("main");
console.log(addMainClass);

// 7) Remove the class main on the div with a class of footer.
addMainClass.classList.remove("main");
console.log(addMainClass);

// 8) Create a new li element.
const addElement = document.createElement("li");
console.log(addElement);


// 9) Give the li the text "four".
console.log(addElement.innerText = "four");


// 10) Append the li to the ul element.
let appendingCode = document.querySelector("ul");
console.log(appendingCode.appendChild(addElement));


// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const loopList = document.querySelectorAll("ol li");
for(let i = 0 ; i < loopList.length; i++) {
    loopList[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
const removeDiv = document.querySelector(".footer");
console.log(removeDiv.remove());