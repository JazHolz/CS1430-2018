//javascript
var num = prompt("Enter how many lotto numbers you'd like: ");
var lottonum = new Array();
var output = " ";

for (var i = 0; i < num; i++)
{
  lottonum[i] = Math.floor(Math.random()*100);
}
for (var i = 0; i < lottonum.length; i++)
{
  if (i == lottonum.length -1)
  {
    output = output + lottonum[i];
  }
  else
  {
    output = output + lottonum[i] + "-";
  }
}
alert(output);
