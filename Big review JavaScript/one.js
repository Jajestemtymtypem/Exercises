//a
const sklepy = [
  {
    nazwa: "Sklep A",
    produkty: [
      {nazwa: "Mleko", cena: 3},
      {nazwa: "Chleb", cena: 2.5}
    ]
  },
  {
    nazwa: "Sklep B",
    produkty: [
      {nazwa: "Masło", cena: 7}
    ]
  },
  {
    nazwa: "Sklep C",
    produkty: [
      {nazwa: "Ser", cena: 5},
      {nazwa: "Jajka", cena: 6},
      {nazwa: "Sok", cena: 4.5}
    ]
  }
];
let lacznaWartosc = 0;
for(const sklep of sklepy){
  for(const produkt of sklep.produkty){
    lacznaWartosc += produkt.cena;
  }
}
console.log(lacznaWartosc.toFixed(1));
//b
const artykuly = [
  {tytul: "O psach", tagi: ["zwierzeta", "dom"]},
  {tytul: "O programowaniu", tagi: ["kod", "javascript"]},
  {tytul: "O kotach", tagi: ["zwierzeta", "relaks"]},
  {tytul: "O CSS", tagi: ["kod", "frontend"]}
];
for(artykul of artykuly){
  if(artykul.tagi.includes("kod")){
    console.log(artykul.tytul)
  }
}
//8
const rachunki = [
  {miesiac: "Styczeń", oplaty: {prad: 120, woda: 60}},
  {miesiac: "Luty", oplaty: {prad: 140, woda: 50}},
];
let prad = 0;
let woda = 0;
for(const rachunek of rachunki){
  prad += rachunek.oplaty.prad
  woda += rachunek.oplaty.woda
}
console.log("Łącznie prąd: ",prad)
console.log("Łącznie woda: ",woda)

const suma = rachunki.reduce((acc, rachunek) => {
  acc.prad += rachunek.oplaty.prad;
  acc.woda += rachunek.oplaty.woda;
  return acc;
}, { prad: 0, woda: 0 }); // początek: wszystko równe 0

console.log(suma)

const dzien = [
  {godzina: "08:00", zuzycie: {gaz: 1.2, prad: 0.5}},
  {godzina: "12:00", zuzycie: {gaz: 0.8, prad: 0.9}},
  {godzina: "18:00", zuzycie: {gaz: 1.0, prad: 0.6}},
];
const caleZuzycie = dzien.reduce((acc, godzina)=>{
  acc.gaz += godzina.zuzycie.gaz;
  acc.prad += godzina.zuzycie.prad;
  return acc;
},{gaz: 0, prad: 0})
console.log(caleZuzycie)
//9
const magazyn = {
  sekcjaA: [
    {nazwa: "śrubka", ilosc: 100},
    {nazwa: "młotek", ilosc: 20}
  ],
  sekcjaB: [
    {nazwa: "wiertło", ilosc: 50}
  ]
};
let calkowitaLiczbaPrzedmiotow = 0;
let sekcja = Object.entries(magazyn)
for(const dzial of sekcja){
  console.log(dzial)
  for(const produkt of dzial){
    console.log(produkt)
  }
}