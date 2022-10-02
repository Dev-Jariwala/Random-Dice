var randomVariable1 = Math.floor(Math.random()*6);
console.log(randomVariable1);

var imgs1 = ["images/dice1.png","images/dice2.png ","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var ranImgs1 = imgs1[randomVariable1];

document.querySelector(".img1").setAttribute("src",ranImgs1);

var randomVariable2 = Math.floor(Math.random()*6);

var imgs2 = ["images/dice1.png","images/dice2.png ","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var ranImgs2 = imgs2[randomVariable2];

document.querySelector(".img2").setAttribute("src",ranImgs2);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").textContent="🚩 Player1 wins!";
}else if (randomVariable1<randomVariable2) {
    document.querySelector("h1").textContent="Player2 wins!🚩";
}else if (randomVariable1===randomVariable2) {
    document.querySelector("h1").textContent="draw!";
}
