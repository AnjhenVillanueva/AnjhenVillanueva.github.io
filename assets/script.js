// function mySum(a, b){

// return a + b

// }

// function mySubtract(a,b){
//     return a - b
// }

// function myProduct(a,b){
//     return a * b
// }

// function myDivide(a,b){
//     return a / b
// }

// function myExp(a,b){
//     return a ** b
// }

// function myRemainder(a,b){
//     return a % b
// }

// const myFirstVariable = 50;
// const mySecVariable =  3;

// const sum = myFirstVariable + mySecVariable
// const subtract = myFirstVariable - mySecVariable
// const product = myFirstVariable * mySecVariable
// const divide = myFirstVariable / mySecVariable
// const exp = myFirstVariable ** mySecVariable
// const remainder = myFirstVariable % mySecVariable

// console.log(mySum(myFirstVariable,mySecVariable))
// console.log(mySubtract(myFirstVariable, mySecVariable))
// console.log(myProduct(myFirstVariable, mySecVariable))
// console.log(myDivide(myFirstVariable, mySecVariable))
// console.log(myExp(myFirstVariable, mySecVariable))
// console.log(myRemainder(myFirstVariable, mySecVariable))

// const iceCream = "Vanilla"

// if (iceCream === "Chocolate") {
//     console.log("This is my favorite flavor")
// }else if(iceCream === "Vanilla"){
//     console.log("Vanilla is ok")
// }
//  else{
//     console.log("This is not my flavor")
// }

// for (let i = 100; i < 101; i = i++){
//     console.log(i)
// }


// 1 to 100 but odd numbers only
// for (let i = 1; i<=100; i++){
//     if (i % 2 !==0){
//         console.log(i);
//     }
// }

// const body = document.body
// const div = document.createElement("div")
// body.append(div)

// // create html element like div
// const strong = document.createElement("strong")
// strong.innerText = "Web Dev 101"
// div.append(strong)

// this will remove the div in html
// const div = document.querySelector("div")
// div.remove()

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// spanBye.remove()
// div.append(spanBye)

// console.log(spanHi.getAttribute("title"))
// spanHi.setAttribute("id", "change-id")

// spanHi.removeAttribute("id")

console.log(spanHi.dataset)
spanHi.dataset.newName = "hi"

spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi1")

spanHi.style.color = "red"
spanHi.style.backgroundColor = "blue"