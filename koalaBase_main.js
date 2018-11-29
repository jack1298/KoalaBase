//================DEFINE KOALAS=================== 

//Kx = koala #, refer to excel file for full data

var k1 = {
	name: "Philly",
	year: 1997, 
	gender: "Male",
	found: "Tree",
	fwc: "false", //found with children
	dead: "false",
	removed: "false"
};

var k2 = {
	name: "Sammy",
	year: 1997, 
	gender: "Female",
	found: "Tree",
	fwc: "true", //found with children
	dead: "false",
	removed: "false"
};

var k3 = {
	name: "Lucky",
	year: 1998, 
	gender: "Male",
	found: "Tree",
	fwc: "false", //found with children
	dead: "false",
	removed: "false"
};


var k4 = {
	name: "Molly",
	year: 1997, 
	gender: "Female",
	found: "Tree",
	fwc: "false", //found with children
	dead: "false",
	removed: "false"
};

var koalaArr = [k1, k2, k3, k4];

//animation 
//var koala = doc..... //select koala from html

//Buttons
var buttons = document.getElementsByTagName("button");

//locations of button answers in the button array
const Q1_M = 0;
const Q1_F = 1;
const Q2_A = 2;
const Q2_B = 3;

const finished = buttons.length - 1;

//more questions to come... maybe



//===================LOGIC========================
//Question 1: 

buttons[0].addEventListener("click", function(){alert("test");});


buttons[Q1_F].addEventListener("click", function(){
	//alert the female button was pressed 
});

//Question 2: 

//finish button pressed 
buttons[finished].addEventListener("click", function(){
	/*
		*call finished function
		*check
	*/
});


//===================FUNCTIONS=====================

