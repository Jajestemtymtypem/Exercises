const slowa = ["kot", "pies", "kot", "mysz", "pies", "kot"];
function zliczanieSlow(tab){
  const raport = {};
  for(const slowo of tab){
    if(!raport[slowo]){
      raport[slowo] = 0;
    }
    raport[slowo] ++
  }
  return raport
}
console.log(zliczanieSlow(slowa))
const raportSlow = slowa.reduce((acc,slowo)=>{
  if(!acc[slowo]) acc[slowo] = 0;
  acc[slowo]++;
  return acc;
},{});
console.log(raportSlow)
//2
const gracze = [
  { nick: "Ania", punkty: 50 },
  { nick: "Kuba", punkty: 30 },
  { nick: "Ania", punkty: 20 },
  { nick: "Ola", punkty: 40 }
];
function sumaPkt(tab){
  const raport = {};
  for(const gracz of tab){
    if(!raport[gracz.nick]){
      raport[gracz.nick] ={
        sumaPunktow:0
      };
    }
    raport[gracz.nick].sumaPunktow += gracz.punkty;
  }
  return raport;
}
console.log(sumaPkt(gracze))

const raportPkt = gracze.reduce((acc, gracz)=>{
  if(!acc[gracz.nick]) acc[gracz.nick] ={sumaPunktow:0};
  acc[gracz.nick].sumaPunktow += gracz.punkty
  return acc;
},{});
console.log(raportPkt)
//3 musiałem się wpomóc innnym czatem problem sprawiło mi warnek w if i goólnie poruszanie się po tablicy dziwne te zadanie :/
const uczniowie = [
  { imie: "Ania", srednia: 5.0 },
  { imie: "Kuba", srednia: 3.8 },
  { imie: "Ola", srednia: 2.9 },
  { imie: "Tomek", srednia: 4.2 }
];
function rankingUczniow(tab){
  const raport = {"Wzorowy":[], "Przeciętny":[], "Słaby":[]};
  for(const uczen of tab){
    if(uczen.srednia >4.5) raport["Wzorowy"].push(uczen.imie)
    else if(uczen.srednia <= 3) raport["Słaby"].push(uczen.imie)
    else raport["Przeciętny"].push(uczen.imie)
    }
  return raport;
}
console.log(rankingUczniow(uczniowie))

const srednia = uczniowie.reduce((acc, uczen)=>{
  if(uczen.srednia >4.5) acc.Wzorowy.push(uczen.imie);
  else if (uczen.srednia >=3) acc["Przeciętny"].push(uczen.imie);
  else acc.Slaby.push(uczen.imie)
  return acc;
},{Wzorowy:[], "Przeciętny":[], Slaby:[]});
console.log(srednia)
//4
const produkty = [
  { kategoria: "napoje", cena: 10 },
  { kategoria: "napoje", cena: 15 },
  { kategoria: "nabiał", cena: 8 },
  { kategoria: "nabiał", cena: 12 },
  { kategoria: "inne", cena: 5 }
];
const raportProduktow = produkty.reduce((acc,produkt)=>{
  if(!acc[produkt.kategoria]) acc[produkt.kategoria]={liczba:0, suma:0}
  acc[produkt.kategoria].liczba ++;
  acc[produkt.kategoria].suma += produkt.cena;
  return acc;
},{})
console.log(raportProduktow)