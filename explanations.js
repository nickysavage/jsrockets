//Explanations
//Strings between '' or ""
var favColor = 'blue';
// Array is a list
var myArray = ['blue', 'red', 'green'];
//3 is an integer so no '' or "" if it did have those then it would be a string and not a number
var numOfFavColors = 3;
//Boolean is a true or false doesnt matter upper or lower, sublime likes lower case
var hasGotFavColors = true;
//object
var nickObject = {
	firstName: 'Nick', 
	lastName: 'Savage',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 51,
	isMale: true
}
//function is something that can be reused
//()this is something that makes it a function
//and the function happens between these {}
 var whatIsMyFavColor = function () {
 	

}
 var doSomething = function () {
 	console.log("do Something")
}
/* var doSomething = function () {
 	console.log("do Something")
}
undefined
doSomething
() {
 	console.log("do Something")
}
doSomething()
VM602:3 do Something
undefined
*/
var whatIsMyFavColor = function () {
 	
 	return 'blue';
}
//math.round will round a number
Math.round(3.454564)
var whatIsMyFavColor = function () {
 	return false;

 	return true;
 	
 	return 'blue';
}
//The above will stop because the first is false
//Anything after the first return stops
var area = function (width, height) {
	return width * height;
}
//above will only return NaN not a number
//if i pass in (5,4) I will get 20
//These are (firstname, secondname) almost like variables
//but they are paremeters
var fullName = function (firstname, secondname){
	return firstname + ' ' +secondname;
}
//outputs this fullName('Nick', 'Savage')
//"Nick Savage"
//if we do fullname(nick, savage) it will not work because
// no string noted by ''or""
//if we do this 
var myName = "Nick"
//Then this
fullname(myName, 'Savage')
//it will come back with this "Nick Savage"
//if statements
if (true) {
	//do something
	alert('male');
};
//alert makes it come back with a box that says male in browser
//now lets make it more dynamic
if ('male' == 'male') {
	//do something
	alert('male');
};
//will popup with a box that says male
//remember 1 = assigns a value, need to 
//too equal like 3 == 3
if ('male' == 'male') {
	//do something
	alert('male');
};
if (1 == 2) {
	//do something
	alert('male');
};
//which says clearly it is false 1 == 2
//false but 1 == 1 then it would return true
// or 10 is bigger than 1 like below then its true
if (10 > 1)
//or 10 is bigger > or equal to = 1 is true
//or 10 is smaller than < or = to 1 is false
var number1 = 10;
var number2 = 100;
//above quite powerful when combined with variables
//we can do these with strings, intergers, arrays
//which means we can do any sort of thing in (here)
//functions can also return true or false
//so we can say (number1 > number2) which means 
//number1 is bigger than number2 like below
var number1 = 10;
var number2 = 100;

if (number1 > number2) {
	alert('male');
}
//nothing happens because number1 is not bigger
//if we do below though
var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	alert('male');
}
//then we get the alert box of male.
//now we can go to google and just put this in console
if (number1 < number2) {
	alert('true!!!');
}
//changed the male to true, we already have the variables 
//loaded so dont need to write that again.
// so if it is true perform what is in the 
// alert('')
//we can also do else
if (number1 < number2) {
	alert('true!!!');
} else {
	alert('false!!!');
}
//so if (number1 > number2) {
//	alert('true!!!');
//} else {
//	alert('false!!!');
//} is false
var name1 = 'Nick';
var name2 = 'Bob';

if (name1 == 'Nick') {
	alert('true 1 !!!');
} else if (name2 == 'Nick'){
	alert('true 2 !!!');
} else {
	alert('false!!!');
}
//the above would be true 1 !!!
//if we changed name1 to "rick" then false!!!
//then if we say name2 = 'Nick' then it is true 2 !!!
//if statements you can say && which means and
//|| which is or
//like
if (name1 == "Nick" &&  name2 == "rick")
	//or
if (name1 == "Nick" || name2 == "rick" && name3 == "tom")




































































































































































































































































