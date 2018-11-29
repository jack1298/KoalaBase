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
var koala = document.getElementById("koala");

//locations of button answers in the button array
const Q1_M = 0;
const Q1_F = 1;
const Q2_A = 2;
const Q2_B = 3;

const finished = buttons.length - 1;

//more questions to come... maybe



//===================LOGIC========================
//Question 1: 

buttons[0].addEventListener("click", function(){
	//alert("test");
	/*
		*Answer was male
		*Move koala up the tree to the given location

		*enable next question
		*disable next question

		*remove koalas from list
	*/

	//alert("the male button was pressed");

	ctx.translate(0,0);
    ctx.drawImage(koala,10,10, 10, 10);
        //ctx.restore();

	for (var i = koalaArr.length - 1; i >= 0; i--) {
		if (koalaArr[i].gender == "female") {
			console.log(koalaArr[i].name + "removed");
			koalaArr[i].removed = "true";
		}
	}
});


buttons[Q1_F].addEventListener("click", function(){
	//alert the female button was pressed 
	ctx.translate(100,100);
    ctx.drawImage(koala,0.1,0.1);
});

//Question 2: 

buttons[2].addEventListener("click", function(){
	//alert the female button was pressed 
	ctx.translate(1000,250);
    ctx.drawImage(koala,0.1,0.1);
});

buttons[3].addEventListener("click", function(){
	//alert the female button was pressed 

	ctx.translate(300,400);
    ctx.drawImage(koala,0.1,0.1);
});

//finish button pressed 
buttons[finished].addEventListener("click", function(){
	/*
		*call finished function
		*check
	*/
});


//===================FUNCTIONS=====================

