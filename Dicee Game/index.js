//getting numbers between 1-6
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage1= "images/dice"+randomNumber1+".png"; //dice1.png-dice6.png
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png"; //dice1.png-dice6.png
//choose a tag name and specify which one will be change and set an attribute and its value into it
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
//comparing players' dice value
if(randomNumber1 > randomNumber2){ 
  document.querySelector("h1").innerHTML="🥇Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="🥇Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="DRAW!";
}
