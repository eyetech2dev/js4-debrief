console.log('This js file is connected')
// BASIC SYNTAX
// Selectors: 
let elementName = document.querySelector("#elementId")
// Functions
function functionName() {
  // do something here
 console.log("Hello")
}
// Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
// Function
// Call the event

const nameClick = document.querySelector('#myName');
const nameClickAppear = () => {
  nameClick.value = "eyetech2dev" 
}
btnName.addEventListener('click', nameClickAppear);

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

const offBulb = document.querySelector("#imageOff");
const turnBulbOn = () => {
  offBulb.src = "images/lighton.png"
  offBulb.addEventListener('mouseout', () => {
    offBulb.src = "images/lightoff.png"
  });
}
offBulb.addEventListener('mouseover', turnBulbOn);

// 3. Double click button to display content

const dblclickBtn = document.querySelector('#btndbName');
const dblclickImg = () => {
  document.querySelector('#displayPara').innerHTML = '<img src="images/smileyface.png"/>'
}
dblclickBtn.addEventListener('dblclick', dblclickImg);
// 4. Traffic Lights
// Selectors
const stopBtn = document.querySelector('#btnStop');
const readyBtn = document.querySelector('#btnReady');
const goBtn = document.querySelector('#btnGo');

const stopLight = document.querySelector('#stopDiv');
const readyLight = document.querySelector('#readyDiv');
const goLight = document.querySelector('#goDiv');
// Function 1
const redLight = () =>{
  stopLight.style.background = 'red';
  readyLight.style.background = 'black';
  goLight.style.background = 'black';
}
// Function 2
const yellowLight = () =>{
  stopLight.style.background = 'black';
  readyLight.style.background = 'yellow';
  goLight.style.background = 'black';
}
// Function 3
const greenLight = () =>{
  stopLight.style.background = 'black';
  readyLight.style.background = 'black';
  goLight.style.background = 'green';
}
// Call the events
stopBtn.addEventListener('click', redLight);
readyBtn.addEventListener('click', yellowLight);
goBtn.addEventListener('click', greenLight);

// 5. Change textbox border colours
// Selectors

// Function

// Call the event

// 6. Validate the input [length should be more than 5 characters]
// Selectors

/*Function {
  //if statement
}*/

// Call the event

// 7.create a list of hobbies
// Selectors

/*Function {
  //for loop
}*/

// Call the event

// 8. Display a profile card from an object
//Object

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
