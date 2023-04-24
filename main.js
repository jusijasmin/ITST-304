// define the colors
var colors = [	"red",	"blue",	"green",	"yellow",	"purple",	"orange"];

// define the ball array
var balls = [];

// create the balls
for (var i = 0; i < 30; i++) {
	var ball = document.createElement("div");
	ball.className = "ball";
	ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	ball.onclick = function() {
		removeBall(this);
	};
	document.querySelector(".container").appendChild(ball);
	balls.push(ball);
}

// remove a ball when clicked
function removeBall(ball) {
	ball.parentNode.removeChild(ball);
	var index = balls.indexOf(ball);
	balls.splice(index, 1);
	if (balls.length === 0) {
		alert("Game Over!");
	}
}