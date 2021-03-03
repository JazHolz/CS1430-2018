//javascript

var markers = ["X", "O"];
var scores = new Array;;
var playerNames = new Array();
var winValues = [7,56,73,84,146,273,292,448];
var winner;
var gameOver;

alert("I Want To Play A Game");

playerNames[0] = prompt("First Player, Your Name? ");
playerNames[1] = prompt("Second Player, Your Name? ");

var currentPlayer = 0;

function playAgain ()
{
	startGame();
}

function startGame()
{

	updateGameLabel("It's " + playerNames[currentPlayer] + "'s Turn");

	scores[0] = 0;
	scores[1] = 0;

	winner = false;
	gameOver = false;

	document.getElementById("row-1").children[0].innerHTML = "&nbsp;";
	document.getElementById("row-1").children[1].innerHTML = "&nbsp;";
	document.getElementById("row-1").children[2].innerHTML = "&nbsp;";

	document.getElementById("row-2").children[0].innerHTML = "&nbsp;";
	document.getElementById("row-2").children[1].innerHTML = "&nbsp;";
	document.getElementById("row-2").children[2].innerHTML = "&nbsp;";

	document.getElementById("row-3").children[0].innerHTML = "&nbsp;";
	document.getElementById("row-3").children[1].innerHTML = "&nbsp;";
	document.getElementById("row-3").children[2].innerHTML = "&nbsp;";
}

function updateGameLabel (displayValue)
{
	document.getElementById("game-label").innerText = displayValue;
	document.getElementById("game-label").style.color = "#FFFFFF";
	document.getElementById("game-label").style.textAlign = "center";
}

function play(divObject, points)
{
	if (divObject.innerHTML == "&nbsp;" && gameOver == false)
	{
		divObject.innerText = markers[currentPlayer];
		scores[currentPlayer] = scores[currentPlayer] + points;

		didSomebodyWin();

		if (winner == false && gameOver == false)
		{
			if (currentPlayer == 0) {currentPlayer=1;}
			else if (currentPlayer == 1) {currentPlayer=0;}

			updateGameLabel("It's " + playerNames[currentPlayer] + "'s Turn");
		}
	}
}

function didSomebodyWin()
{

	for (var counter = 0; counter < winValues.length; counter++)
	{
		if ((winValues[counter] & scores[currentPlayer]) == winValues[counter])
		{
			updateGameLabel(playerNames[currentPlayer] + " Has Won.");
			winner = true;
			gameOver = true;
			break;
		}
		else if ((scores[0] + scores[1]) == 511)
		{
			updateGameLabel("You didn't follow the rules, play again to win.");
			gameOver = true;
		}
	}
}
