const uczniowie = [
  { imie: "Ola", wiek: 12 },
  { imie: "Kuba", wiek: 14 },
  { imie: "Tomek", wiek: 11 }
];
for(const uczen of uczniowie){
  if(uczen.wiek>12){
    console.log(uczen.imie)
  }
}

const zespoly = [
  {
    nazwa: "Zespół A",
    czlonkowie: [
      { imie: "Kasia", rola: "lider" },
      { imie: "Marek", rola: "członek" }
    ]
  },
  {
    nazwa: "Zespół B",
    czlonkowie: [
      { imie: "Zosia", rola: "członek" },
      { imie: "Adam", rola: "lider" }
    ]
  }
];
for(const zespol of zespoly){
  for(const czlonek of zespol.czlonkowie){
    if(czlonek.rola === "lider"){
      console.log(czlonek.imie)
    }
  }
}

const firmy = [
  {
    nazwa: "Firma A",
    faktury: [
      { numer: 1, kwota: 1000 },
      { numer: 2, kwota: 2000 }
    ]
  },
  {
    nazwa: "Firma B",
    faktury: [
      { numer: 3, kwota: 1500 }
    ]
  }
];
let lacznaKwota = 0;
for(const firma of firmy){
  for(const faktura of firma.faktury){
    lacznaKwota += faktura.kwota
  }
}
console.log("Suma faktur: " + lacznaKwota)

const zwierzeta = ["kot", "pies", "mysz", "kot", "pies"];
const unikalne = new Set(zwierzeta)
console.log([...unikalne])

const posty = [
  { id: 1, tytul: "JS", tagi: ["kod", "frontend"] },
  { id: 2, tytul: "Psy", tagi: ["zwierzeta", "dom"] },
  { id: 3, tytul: "CSS", tagi: ["frontend", "styl"] }
];
for(const post of posty){
  if(post.tagi.includes("frontend")){
    console.log(post.tytul)
  }
}

const produkty = [
  { nazwa: "Mleko", cenaNetto: 3 },
  { nazwa: "Chleb", cenaNetto: 2.5 },
  { nazwa: "Ser", cenaNetto: 5 }
];

const produktVat = [];
for(const produkt of produkty){
  produkt.cenaVat = (produkt.cenaNetto * 0.23)+produkt.cenaNetto
  produktVat.push(produkt)
  delete(produkt.cenaNetto)
}
console.log(produktVat)


// ✅ Zadanie 1 – Akumulator liczbowy (suma)

// Zsumuj punkty graczy:
const punkty = [10, 20, 15, 5];
const suma = punkty.reduce((acc, liczba) => acc + liczba, 0);
console.log(suma); // 50

// ✅ Zadanie 2 – Akumulator tekstowy (łączenie imion)

// Połącz imiona w jeden string, oddzielając przecinkami:
const imiona = ["Ania", "Bartek", "Celina"];
const razem = imiona.reduce((acc, imie, index) => {
  return acc + (index === 0 ? "" : ", ") + imie;
}, "");
console.log(razem); // "Ania, Bartek, Celina"

// ✅ Zadanie 3 – Akumulator obiektowy (liczenie wystąpień)

// Zlicz, ile razy występują poszczególne oceny:
const oceny = [5, 4, 6, 5, 6, 6, 4];
const wystepowanie = oceny.reduce((acc, ocena) => {
  acc[ocena] = (acc[ocena] || 0) + 1;
  return acc;
}, {});
console.log(wystepowanie);
// { '4': 2, '5': 2, '6': 3 }


// 🔁 2. filter().map() – praktyczne łańcuchowanie
// ✅ Zadanie

// Z podanych produktów wybierz te, które kosztują mniej niż 10 zł i wypisz ich nazwy DUŻYMI LITERAMI:
const produkty = [
  { nazwa: "Chleb", cena: 4 },
  { nazwa: "Masło", cena: 9 },
  { nazwa: "Kawior", cena: 55 }
];

const tanieNazwy = produkty
  .filter(p => p.cena < 10)
  .map(p => p.nazwa.toUpperCase());

console.log(tanieNazwy); // ["CHLEB", "MASŁO"]


function sprawdzHaslo(haslo) {
  if (haslo.length < 6) throw new Error("Hasło za krótkie");
  if (!/[A-Z]/.test(haslo)) throw new Error("Brak dużej litery");
  if (!/\d/.test(haslo)) throw new Error("Brak cyfry");
  return "Hasło poprawne";
}

try {
  console.log(sprawdzHaslo("test"));
} catch (e) {
  console.error("Błąd:", e.message);
}finally{
  console.log("Walidacja zakończona")
}
//2
function divide(a,b){
  if(typeof a !== "number"||typeof b !== "number"){
    throw new Error("Argument nie jest liczbą")
  }
  if(b === 0) throw new Error("Nie dzielimy przez zero!");
  return a/b
}
try{
  console.log(divide(10,2));
} catch (e){
  console.warm("Błąd:", e.message)
}
//3
const users = [
  { name: "Ania", age: 25 },
  { name: "Kuba" }, 
  { name: "Basia", age: 30 }
];

for(const user of users){
  if(user.age !== undefined){
    console.log(`${user.name} ma ${user.age} lata.`)
  }else{console.log("Brak danych")}
}
//  ❓ Mini quiz (10 min)

// 1️⃣ Co zrobi throw new Error("Błąd")? wyślę błąd w przypadku jakim zostało to użyte
// 2️⃣ Czy finally wykona się zawsze, nawet po return w try? tak wykona się zawsze 
// 3️⃣ Jak sprawdzić typ błędu złapanego w catch? console.log(e.message)
// 4️⃣ Czym różni się console.error() od console.warn()? tego to nie wiem napisz i wytłumacz
// 5️⃣ Dlaczego try...catch nie złapie błędu asynchronicznego (setTimeout)? też nie mam pojęcia wytłumacz 