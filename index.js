//Random image for player1
var randomnumber1=Math.floor(Math.random()*6)+1;

var randomimage="dice"+randomnumber1+".png";

var randomimagesource="images/"+randomimage;

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

//Random image for player2
var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2="dice"+randomnumber2+".png";

var randomimagesource2="images/"+randomimage2;

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

//checking who wins

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=("Player 1  Wins");
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML=("Player 2 Wins");
}
else
{
    document.querySelector("h1").innerHTML=("Draw");
}