//javascript
var randomNum = Math.floor(Math.random()*100);

function gameStart()
{
  document.getElementById("userMessage").innerText = "Hello there, thanks for coming to play a guessing game with us!";
}
function compareGuesses()
{
  var theguess = eval(document.guessForm.userGuess.value);
  if( theguess < randomNum )
  {
    document.getElementById("userMessage").innerText = "I guess you'll have to try again, [gloomily]";
    document.getElementById("gameImage").src="img/low.png";
  }
  else if( theguess > randomNum )
  {
    document.getElementById("userMessage").innerText = "Aw Shucks, try again you got this!";
    document.getElementById("gameImage").src="img/high.png";
  }
  else
  {
    document.getElementById("userMessage").innerText = "Oh Bother, you've won.";
    document.getElementById("gameImage").src="img/win.png";
  }
  document.guessForm.userGuess.select();
  document.guessForm.userGuess.focus();
}
