function randomDice(){
    return Math.floor(Math.random() *6) + 1;
}
function throwDice(){
   // const pips = randomDice();
    console.log("Wyrzucona ilość oczek na kości", pips);
}
ducument.getElementById("button").addEventListener("click",throwDice);