const produkty = [
  { nazwa: "Kawa", cena: 20, kategoria: "napoje" },
  { nazwa: "Mleko", cena: 8, kategoria: "nabiał" },
  { nazwa: "Monitor", cena: 800, kategoria: "elektronika" },
  { nazwa: "Czekolada", cena: 6, kategoria: "słodycze" },
  { nazwa: "Herbata", cena: 12, kategoria: "napoje" },
  { nazwa: "Klawiatura", cena: 120, kategoria: "elektronika" }
];

let drogie=[];
let napoje=[];
//w pętli for rozpijam na poszczególne produkty w których będę mógł się poruszać.
for(const produkt of produkty){
  //wchodzę w produkt i po kluczu cena znajduje ile kosztuje dana rzecz i sprawdzam czy jest droższa niż 10 jeżeli jest to wrzucam do pustej tablicy za pomocą push()
  if(produkt.cena > 10){
    drogie.push(produkt);
  }
  if(produkt.kategoria=="napoje"){
    napoje.push(produkt);
  }
}
console.log(drogie)
console.log(napoje)
// no i ekstra teraz doczytałem w zadaniu żeby nie używać dwuch ifów tylko filter() ok robię drugą wersje 
let drogieFilter=[]
let napojeFilter=[]
  drogieFilter=produkty.filter(produkt => produkt.cena >10);
  napojeFilter=produkty.filter(produkt => produkt.kategoria == "napoje");
console.log(drogieFilter)
console.log(napojeFilter)
//musiałem trochę pokombinować nie potrzebnie robiłem pętle for przed filtrem bo sam filter przechodzi po tablicy i można dostać się do każdego obiektu. 

//2
let nazwyProduktow = [];
nazwyProduktow = [...produkty].map(produkt => produkt.nazwa.toUpperCase())
console.log(nazwyProduktow)
let sameCeny = [];
sameCeny = [...produkty].map(produkt => produkt.cena);
console.log(sameCeny)
let sumaCen = [...sameCeny].reduce((a,b)=>{
 return a+b;
},0)
console.log(sumaCen)
let sredniaCena = sumaCen / sameCeny.length;
console.log(sredniaCena);
let sumaElektroniki = [...produkty].filter(produkt => produkt.kategoria=="elektronika").map(produkt => produkt.cena).reduce((suma, liczba)=>suma+liczba,0)
console.log(sumaElektroniki)

//4
let kombinacja = [...produkty].filter(produkt => produkt.cena>10).map(produkt=>produkt.nazwa).join(", ")
console.log("Produkty:",kombinacja)
//bonus
let mojaTablica = ["Edek", "Edwart", "Erwin", "Zenon", "Paweł"];
let imionaNaE = [...mojaTablica].filter(imie => imie.startsWith("E"))
let imionaINazwiska = [...mojaTablica].map(imie => imie+" Kwolski");
let ileE = [...mojaTablica].join("").toLowerCase().split("").reduce((suma, litera)=>{
  if(litera === "e"){
    suma++;
  }
  return suma;
},0)
console.log(imionaNaE)
console.log(imionaINazwiska)
console.log(ileE)
// 1️⃣ Co zwraca .map() – nową tablicę czy zmienia starą? nową tablicę. 
// 2️⃣ Czy .filter() może zwrócić pustą tablicę? tak
// 3️⃣ Co robi .reduce() jeśli nie podasz wartości początkowej? pierwszą daną potraktuje jak wartosc początkowa przy sownowaniu będzie działać
// 4️⃣ Kiedy .map() i .filter() mogą być użyte razem? kiedy chcemy stworzyć nową tablicę z wybranych elementów np sumElektroniki zastosowałem najpierw filter nastepnie map
// 5️⃣ Jak jednym zdaniem opisałbyś różnicę między nimi? map działa z cała tablicą a filter wybiera elementy. 
const produkty = [
  { nazwa: "Kawa", cena: 20, kategoria: "napoje" },
  { nazwa: "Mleko", cena: 8, kategoria: "nabiał" },
  { nazwa: "Monitor", cena: 800, kategoria: "elektronika" },
  { nazwa: "Czekolada", cena: 6, kategoria: "słodycze" },
  { nazwa: "Herbata", cena: 12, kategoria: "napoje" },
  { nazwa: "Klawiatura", cena: 120, kategoria: "elektronika" }
];

let drogie=[];
let napoje=[];
//w pętli for rozpijam na poszczególne produkty w których będę mógł się poruszać.
for(const produkt of produkty){
  //wchodzę w produkt i po kluczu cena znajduje ile kosztuje dana rzecz i sprawdzam czy jest droższa niż 10 jeżeli jest to wrzucam do pustej tablicy za pomocą push()
  if(produkt.cena > 10){
    drogie.push(produkt);
  }
  if(produkt.kategoria=="napoje"){
    napoje.push(produkt);
  }
}
console.log(drogie)
console.log(napoje)
// no i ekstra teraz doczytałem w zadaniu żeby nie używać dwuch ifów tylko filter() ok robię drugą wersje 
let drogieFilter=[]
let napojeFilter=[]
  drogieFilter=produkty.filter(produkt => produkt.cena >10);
  napojeFilter=produkty.filter(produkt => produkt.kategoria == "napoje");
console.log(drogieFilter)
console.log(napojeFilter)
//musiałem trochę pokombinować nie potrzebnie robiłem pętle for przed filtrem bo sam filter przechodzi po tablicy i można dostać się do każdego obiektu. 

//2
let nazwyProduktow = [];
nazwyProduktow = [...produkty].map(produkt => produkt.nazwa.toUpperCase())
console.log(nazwyProduktow)
let sameCeny = [];
sameCeny = [...produkty].map(produkt => produkt.cena);
console.log(sameCeny)
let sumaCen = [...sameCeny].reduce((a,b)=>{
 return a+b;
},0)
console.log(sumaCen)
let sredniaCena = sumaCen / sameCeny.length;
console.log(sredniaCena);
let sumaElektroniki = [...produkty].filter(produkt => produkt.kategoria=="elektronika").map(produkt => produkt.cena).reduce((suma, liczba)=>suma+liczba,0)
console.log(sumaElektroniki)

//4
let kombinacja = [...produkty].filter(produkt => produkt.cena>10).map(produkt=>produkt.nazwa).join(", ")
console.log("Produkty:",kombinacja)
//bonus
let mojaTablica = ["Edek", "Edwart", "Erwin", "Zenon", "Paweł"];
let imionaNaE = [...mojaTablica].filter(imie => imie.startsWith("E"))
let imionaINazwiska = [...mojaTablica].map(imie => imie+" Kwolski");
let ileE = [...mojaTablica].join("").toLowerCase().split("").reduce((suma, litera)=>{
  if(litera === "e"){
    suma++;
  }
  return suma;
},0)
console.log(imionaNaE)
console.log(imionaINazwiska)
console.log(ileE)
// 1️⃣ Co zwraca .map() – nową tablicę czy zmienia starą? nową tablicę. 
// 2️⃣ Czy .filter() może zwrócić pustą tablicę? tak
// 3️⃣ Co robi .reduce() jeśli nie podasz wartości początkowej? pierwszą daną potraktuje jak wartosc początkowa przy sownowaniu będzie działać
// 4️⃣ Kiedy .map() i .filter() mogą być użyte razem? kiedy chcemy stworzyć nową tablicę z wybranych elementów np sumElektroniki zastosowałem najpierw filter nastepnie map
// 5️⃣ Jak jednym zdaniem opisałbyś różnicę między nimi? map działa z cała tablicą a filter wybiera elementy. 

const klienci = [
  { imie: "Ania", zakupy: [120, 60, 300] },
  { imie: "Kuba", zakupy: [20, 10, 15] },
  { imie: "Ola", zakupy: [400, 250] },
  { imie: "Tomek", zakupy: [50, 60, 80, 20] }
];
let wynik = [];
function analizujZakupy(tab){
  wynik = tab.map(klient =>{
    const suma = klient.zakupy.reduce((a,b)=>a+b,0);
    const srednia = (suma / klient.zakupy.length).toFixed(2);
    let status= suma > 400 ? "VIP":"STANDARD";
    if(suma<100) status = "LOW"
    return {imie:klient.imie, suma, srednia, status};
  })
  wynik.sort((a,b)=>b.suma - a.suma)
  return wynik;
}

console.log(analizujZakupy(klienci))
function raport(tab){
  let raport ={VIP:0, STANDARD:0, LOW:0, "Łączna suma":0, "Średnia suma per klient":0};
  for(const klient of tab){
  if(klient.status =="VIP"){
    raport.VIP ++
  }else if (klient.status=="STANDARD"){
    raport.STANDARD ++;
  }else {raport.LOW++}
  raport["Łączna suma"] += klient.suma
  raport["Średnia suma per klient"] = raport["Łączna suma"] / tab.length;
}return raport;
 
}
console.log(raport(wynik))

function znajdzNajwiekszyZakup(tab){
let rekord = {imie:"", kwota:0};

for (const klient of tab){
  const max = klient.zakupy.reduce((a,b)=>Math.max(a,b),0)
  if (max > rekord.kwota){
    rekord = { imie:klient.imie, kwota:max}
  }
}
return rekord;
}
console.log(znajdzNajwiekszyZakup(klienci))



////////////////////////
const gracze = [
  { nick: "Shadow", punkty: [120, 140, 100] },
  { nick: "Nova", punkty: [60, 75, 90, 100] },
  { nick: "Blitz", punkty: [200, 180] },
  { nick: "Echo", punkty: [40, 50, 30] }
];
const ranking = [];
function rankingGraczy(tab){

for(const gracz of tab){
  const suma = gracz.punkty.reduce((a,b)=>a+b,0);
  const srednia = (suma/gracz.punkty.length).toFixed(2);
  const max = gracz.punkty.reduce((a,b)=>Math.max(a,b),0);
  let ranga = "";
  if(suma>=250){
    ranga = "ELITA";
  }else if(suma<=100){
    ranga = "POCZĄTKUJĄCY"
  }else{ranga = "ŚREDNIA"}
  let player = {nick: gracz.nick,suma,srednia,max,ranga};
  ranking.push(player)
}
ranking.sort((a,b)=>b.suma-a.suma);
return ranking;
}
console.log(rankingGraczy(gracze))

function statystykiGraczy(tab){
  const statystyka = {"ELITA":0, "ŚREDNIA":0, "POCZĄTKUJĄCY":0};
  for(const gracz of tab){
    if(gracz.ranga =="ELITA") statystyka["ELITA"] ++;
    else if(gracz.ranga =="ŚREDNIA") statystyka["ŚREDNIA"] ++;
    else statystyka["POCZĄTKUJĄCY"]++;
    }
    return statystyka;
}
console.log(statystykiGraczy(ranking))


//2
const uczniowie = [
  { imie: "Ola", oceny: { matematyka: [5, 4, 5], biologia: [3, 4, 3], polski: [5, 5, 4] } },
  { imie: "Kuba", oceny: { matematyka: [2, 3, 3], biologia: [4, 4, 5], polski: [3, 3, 4] } },
  { imie: "Ania", oceny: { matematyka: [4, 4, 5], biologia: [5, 5, 5], polski: [4, 4, 4] } }
];
const raportUczniow = [];
function analizujUczniow(tab){
  for(const uczen of tab){
    let iloscOcen = 0;
    const matematyka = uczen.oceny.matematyka.reduce((a,b)=>a+b,0)
    const srMatematyka = (matematyka/uczen.oceny.matematyka.length).toFixed(2);
    iloscOcen += uczen.oceny.matematyka.length
    const biologia = uczen.oceny.biologia.reduce((a,b)=>a+b,0);
    const srBiologia =(biologia/uczen.oceny.biologia.length).toFixed(2);
    iloscOcen += uczen.oceny.biologia.length
    const polski = uczen.oceny.polski.reduce((a,b)=>a+b,0)
    const srPolski = (polski/uczen.oceny.polski.length).toFixed(2);
    iloscOcen += uczen.oceny.polski.length
    const srednia = ((matematyka+biologia+polski)/(iloscOcen)).toFixed(2);
    let status = "";
    if(srednia > 4.5) status = "Wzorowy"
    else if (srednia < 3.5) status = "Słaby"
    else status = "Dobry"
    
    let raportUcznia = {imie:uczen.imie, matematyka:srMatematyka, biologia:srBiologia, polski:srPolski, sredniaOgolna:srednia, status}
    raportUczniow.push(raportUcznia)
  }
  let raport = {"Wzorowy":0, "Dobry":0, "Słaby":0}
  for(const uczen of raportUczniow){
    if(uczen.status == "Wzorowy"){
      raport["Wzorowy"]++;
    }else if(uczen.status == "Dobry"){
      raport["Dobry"]++;
    }else raport["Słaby"]++
  }

  return {raportUczniow, raport }
}
console.log(analizujUczniow(uczniowie))
