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