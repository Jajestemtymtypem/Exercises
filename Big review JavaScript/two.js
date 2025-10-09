function czyZawiera(text){
    return console.log(text.includes("@")) ;
}
// function czyZawiera(text){
//     return text.includes("@");
// }
// console.log(czyZawiera("elo@")); // true


czyZawiera("rododendron");
czyZawiera("rododendron@");

function odwracaTekst(text){
    return console.log(text.split("").reverse().join(""));
}
odwracaTekst("oko")
odwracaTekst("krokodyl")

function tylkoParzyste(tab){
    let parzyste = tab.filter(liczba => liczba % 2 === 0);
    console.log("Liczby parzyste: " + parzyste);
}
tylkoParzyste([1,2,3,4,5,6,7,8,9,11]);

function tylkoNieParzyste(tab){
    let nieParzyste = tab.filter(liczba => liczba % 2 !== 0);
    console.log("Liczby nie parzyste:  " + nieParzyste)
}
tylkoNieParzyste([1,2,3,4,5,6,7,8,9,11]);

function liczbyPierwsze(liczba){
    if(liczba < 2) return console.log(`${false} Liczba ${liczba} nie jest liczbą pierwszą!`);
    for(let i = 2; i <= Math.sqrt(liczba); i++){
        if(liczba % i === 0){
            return console.log(`${false} Liczba ${liczba} nie jest liczbą pierwszą!`);            
        }
    }
    return console.log(`${true} Liczba ${liczba} jest liczbą pierwszą! Pozdrawiam`);
}
liczbyPierwsze(8)
liczbyPierwsze(2)
liczbyPierwsze(101)

function unikalneLitery(slowo){
    const unikalneLitery = [...new Set(slowo)];
    console.log(unikalneLitery);
}

unikalneLitery("rododendron");


//1 
function poprawneMaile(tab){
    let dobreMaile = [];
    for(let i = 0; i < tab.length; i++){
        if(tab[i].length > 5 && 
            tab[i].includes("@")&&
            (tab[i].endsWith(".pl") || tab[i].endsWith(".com"))){
            dobreMaile.push(tab[i]);
        }
    }
    console.log(dobreMaile);
}
const maile = ["elo", "test@wp.pl", "admin@gmail.com", "zly@adres", "jan@o2.pl"];
console.log(poprawneMaile(maile));
//1 vers 2

function poprawneMaile2(tab){
    return tab.filter(mail =>
        mail.length > 5&&
        mail.includes("@")&&
        (mail.endsWith(".pl")||mail.endsWith(".com"))
    );
}
console.log(poprawneMaile2(maile));

//2 
const wyrazy = ["oko", "pies", "kajak", "słowo"];
function odwrocWyrazy(tab){
    return tab.map(wyraz =>  
        wyraz.split("").reverse().join("")
    );
}
console.log(odwrocWyrazy(wyrazy));
//3
const liczby = [2, 4, 5, 9, 13, 22, 101];
function liczbyPierwsze(tab){
    return tab.filter(liczba => {
        if(liczba<2) return false;
        for(let i = 2; i <= Math.sqrt(liczba); i++){
            if(liczba % i === 0) return false;
        }
        return true;
    });
}
console.log(liczbyPierwsze(liczby));
//4
const slowa = ["oko", "kajak", "pies", "noon", "okno", "ala"];

function znajdzPalindrom(tab){
    return tab.filter(wyraz => wyraz === wyraz.split("").reverse().join(""));
}
console.log(znajdzPalindrom(slowa));
//5
function unikalneLitery(text){
    return [...new Set(text)].join("");
}
console.log(unikalneLitery("rododendron"));

//6
const hasla = ["admin123", "elo@123", "test@1234", "niepoprawne", "user@abc"];
const cyfry = [0,1,2,3,4,5,6,7,8,9];
function silneHasla(tab){
    return tab.filter(haslo =>
        haslo.length >= 7&&
        haslo.includes("@")&&
        (haslo.includes("0")||haslo.includes("1")||haslo.includes("2")||haslo.includes("3")||haslo.includes("4")||haslo.includes("5")||haslo.includes("6")||haslo.includes("7")||haslo.includes("8")||haslo.includes("9"))
    )
}
console.log(silneHasla(hasla))

function poprawneMaileOrgNet(tab){
    return tab.filter(mail =>
        mail.length > 4&&
        mail.includes("@")&&
        (mail.endsWith(".org")||mail.endsWith(".net"))
    );
}
const maile = ["elo", "info@fundacja.org", "test@gmail.com", "kontakt@firma.net", "admin@adres"];
console.log(poprawneMaileOrgNet(maile));

//2
function odwrocWyraz(tab){
    return tab.map(wyraz => 
        wyraz.length>4 
        ? wyraz.split("").reverse().join("")
        : wyraz
    );
}
console.log(odwrocWyraz(["oko", "kajak", "motyl", "dom", "krzesło"]))
//3 
function silniejszeHaslo(haslo){
    if(!haslo.includes("@")) return false;
    const cyfry = haslo.split("").filter(znak => !isNaN(znak) && znak !== " ");
    return cyfry.length >= 2;
}
console.log(silniejszeHaslo("elo@12"));
//4
function unikalneLitery(tab){
    const polaczone = tab.join("");
    const unikalne = [...new Set(polaczone)]
    return unikalne.join("")
}
console.log(unikalneLitery(["oko", "pies", "noon"]
))

function liczbyPierwsze(tab){
    return tab.filter(liczba => {
        if(liczba<2)return false;
        for(let i = 2; i <= Math.sqrt(liczba); i++){
            if(liczba % i === 0) return false;
        }
        return true;
    })
}

console.log(liczbyPierwsze([2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29,]))

//1
function poprawneLoginy(tab){
    return tab.filter(login => (login.length > 3 )&& !login.includes("@"))
}
const loginy = ["admin", "ja@", "ab", "superuser", "piotrek@domena", "ok"];
console.log(poprawneLoginy(loginy))
//2
function odwrocWyrazy(tab){
    return tab.map(wyraz => wyraz.split("").reverse().join(""))
}
console.log(odwrocWyrazy(["pies", "kot", "dom"]))
//3
function nieParzyste(tab){
    return tab.filter(liczba => (liczba%2 !==0) && liczba>10)
}
console.log(nieParzyste([2, 3, 5, 11, 13, 22, 8, 101]))
//4
function silneHasla(tab){
    return tab.filter(haslo => haslo.length >= 8 && haslo.includes("@") && haslo.match(/\d/))
}
const hasla = ["admin123", "user@12", "elo", "mega@secure1", "short@", "hello@2"];
console.log(silneHasla(hasla)); 
//5
function unikalneMale(tab){
    const unikalne = []
    const maleLitery = tab.map(slowo => slowo.toLowerCase())
    for(let i = 0; i<tab.length; i++){
        unikalne.push([...new Set(maleLitery[i])].join(""))
    }
    return unikalne;
}
const slowa2 = ["Rododendron", "TatTat", "Ananas"];
console.log(unikalneMale(slowa2));



