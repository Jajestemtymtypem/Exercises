 dice = {
        kostki: [0, 0, 0, 0, 0],
        hold: [false, false, false, false, false],
        rzut: 0,
        obrazKostki: ["icons/1.png", "icons/2.png", "icons/3.png", "icons/4.png", "icons/5.png"]
    }
    function randomDice(){
    return Math.floor(Math.random() *6) + 1;
}
function throwDice(){
    console.log("początek funkcji", dice.kostki);
    for(let i = 0; i <= 5; i++){
        if(dice.hold[i] === false){
    dice.kostki[i] = randomDice();
    console.log("Wyrzucona ilość oczek na kości", dice.kostki[i]);
    let j = 0;
    let timer = setInterval(() => {
        let r = Math.floor(Math.random() *6) + 1;
        document.getElementById("dice"+[i]).src = "icons/" + r + ".png"
        j++;
        if( j > (dice.kostki[i])+ 10){
            document.getElementById("dice"+[i]).src = dice.obrazKostki[i];
            clearInterval(timer);
        }
    },60)
}
}
dice.rzut ++
console.log("Liczba rzutów.", dice.rzut)
if(dice.rzut === 3){
    dice.rzut = 0;
    dice.hold = [false, false, false, false, false];
    return;
}
console.log("Koniec funcki", dice.kostki)

}

function hello(){
    console.log("hello");
}
document.getElementById("button-throw").addEventListener("click", throwDice);

document.getElementsByClassName(`dice${}`)
