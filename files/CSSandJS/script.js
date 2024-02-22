alert("Bienvenue");

let trav = new Audio("./files/Media/trav.mp3");
trav.preload();

function hoverAnimInMark() {
   document.querySelector("#markid").style.color = "red";
}

function hoverAnimOutMark() {
   document.querySelector("#markid").style.color = "black";
}

function hoverAnimInStrong() {
   document.querySelector("#strongid").style.color = "red";
}

function hoverAnimOutStrong() {
   document.querySelector("#strongid").style.color = "white";
}

function hoverAnimInEm() {
   document.querySelector("#emid").style.color = "red";
}

function hoverAnimOutEm() {
   document.querySelector("#emid").style.color = "white";
}

function hoverAnimInImg() {
   document.getElementById("imgid").src = "./files/Media/cursedban.jpg";
}

function hoverAnimOutImg() {
   document.getElementById("imgid").src = "./files/Media/banner.jpg";
}

function clickPassword() {
   trav.play();
   alert("♪ Never Gonna Give You Up ♪");
}

function clickCroissant() {
   document.getElementById("imgid").src = "./files/Media/croissant.jpg";
}

function clickPinteAuChocolat() {
   document.getElementById("imgid").src = "./files/Media/pinte.png";
   new Audio("./files/Media/syl.mp3").play();
}

function clickElonMusk() {
   document.getElementById("imgid").src = "./files/Media/elonmusk.gif";
   new Audio("./files/Media/elonmusk.mp3").play();
}

function selectorChange() {
   new Audio("./files/Media/bouton.mp3").play();
}
