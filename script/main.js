// Vaeiables always go at the top
// these sre the connection that you are making to elements on 
//use CSS selection to make connections to elements  with javascript \
// let theButton = document.querySelector("#buttonOne);
// create a 1 to 1 connection with a varible
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleboard = document.querySelector(".puzzle-board");


// step 3
function changeBGImage() {
	debugger;
	//theHeading.textContent = "Super Awesome Drag and Drop Game";
	let theNewSource = "images/background" + this.id + "img";
	theHeading.classList.add('orange-headline');
	console.log(theNewSource)
	}
// step 2
//1 to 1
//theButton.addEventListener("click", changeBGimage);

// 1 to many 
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

