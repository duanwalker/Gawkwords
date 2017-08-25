$(document).ready(function{


	console.log("ready");
	//variables
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var randomAlpha = [];
	var category = [];
	var userGuess = [];
	var word = '';
	var image1URL = '';
	var image2URL = '';

	//start game
	playGame();

	function playGame(){
	//start timer
	timer();

	//load word and image variables from json file based on category	


	//load 15 random alphabets from alpha array into randomAlpha[]
	loadAlpha();
	function loadAlpha(){

	}


	}
});