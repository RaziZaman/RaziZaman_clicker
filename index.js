//Razi Zaman Counter App
document.getElementById("count-el").innerText = 0;
function increment() {
    document.getElementById("count-el").innerText++;
    moveButtonRandomly();
}
var count = 1;
function save() {
    if (count % 11 == 0) {
        document.getElementById("save-el").innerHTML = document.getElementById("save-el").innerHTML + document.getElementById("count-el").innerText + "<br>";
    } else {
        document.getElementById("save-el").innerHTML = document.getElementById("save-el").innerHTML + document.getElementById("count-el").innerText + " - ";
    }
    count++;
}
function moveButtonRandomly() {
    var button = document.getElementById("increment-btn");
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var randomX = Math.random() * (viewportWidth - button.offsetWidth);
    var randomY = Math.random() * (viewportHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top =  randomY + "px";
}