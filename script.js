var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var	body = document.getElementById("gradient");
var btn = document.querySelector("button");

function changeBG() {
	var col1 = document.querySelector(".color1");
	var col2 = document.querySelector(".color2");
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1.value + ', ' + col2.value + ')';

	css.textContent = body.style.background + ';';
}


function changeBGR() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1 + ', ' + col2 + ')';

	css.textContent = body.style.background + ';';
}

function randomizer() {
	function ranNum() {
			return Math.floor(Math.random() * Math.floor(256));
	}

	col1 = "rgb(" + ranNum() + ', ' + ranNum() + ', ' + 
		ranNum()  +")";
	col2 = "rgb(" + ranNum() + ', ' + ranNum() + ', ' + 
		ranNum()  +")";	
	changeBGR()
}

changeBG()

col1.addEventListener("input", changeBG)
col2.addEventListener("input", changeBG)
btn.addEventListener("click", randomizer)

