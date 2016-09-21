//two vars given a number
//add the result and log to console


var mber1 = "23";
var mber2 = "78";
var mber3 = "mber1 + mber2"

console.log( "Answer 1: ", mber1 + mber2 );

//create a mulitdimensional array
//output to two items


//var gamedec = ["Masterrace", "Playstation", "Xbox"];
//var cards = ["Magic", "Yugioh", "Poker"];


var Platform =["PCMasterrace", "Playstation", "Xbox","Nitindeo"];
var System =["Improvement not require", "Ps4", "Xbone", "Wii U"];

var combine=[Platform, System];
console.log(combine[2][2]);
console.log(combine[0][1]);

//question 6
var usernumber = prompt ( "Enter your name")

function saymyname( username ) {
	document.getElementByTagname("body")[0]x.innerHTML = "<h2 >Your name is" + username + ", howdy!</h2>"
}

//saymyname( prompt("Tell me your Name..."));


// question 7
function horizontalRule() {
	console.log( "-----------------------");
}
/// envoke (call) our function
horizontalRule();

//ques8
//prize should appect door number and tell
//user that will win the prize on choosen door
//Adding console to 

function prize( door ) {
	var item;
	if( door == 1 ) {
		item = "Lastest tech";
	} else if( door == 2 ){
		item = "New house";
	} else if ( door == 3 ){
		item = "Going to jail";
	}	else {//something went wrong
		item = "Spmething went off the rails"
	}
	return item;
}

console.log( "You've won" + prize( prompt("Pick a door, 1-3") ) );