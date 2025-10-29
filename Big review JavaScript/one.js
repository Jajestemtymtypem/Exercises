//1
const oceny = [
  { imie: "Ania", przedmiot: "matematyka", ocena: 5 },
  { imie: "Ania", przedmiot: "polski", ocena: 4 },
  { imie: "Ania", przedmiot: "matematyka", ocena: 3 },
  { imie: "Kuba", przedmiot: "polski", ocena: 5 },
  { imie: "Kuba", przedmiot: "matematyka", ocena: 4 }
];
function raportOcen(tab){
  const raport = {};
  for(const ocena of tab){
    if(!raport[ocena.imie]){
      raport[ocena.imie]={};
    }
    if(!raport[ocena.imie][ocena.przedmiot]){
      raport[ocena.imie][ocena.przedmiot] = {
        suma:0,
        ilosc:0,
        srednia:0
      };
    }
    raport[ocena.imie][ocena.przedmiot].ilosc ++;
    raport[ocena.imie][ocena.przedmiot].suma += ocena.ocena;
    raport[ocena.imie][ocena.przedmiot].srednia = (raport[ocena.imie][ocena.przedmiot].suma/raport[ocena.imie][ocena.przedmiot].ilosc).toFixed(2);
  }
  return raport;
}
console.log(raportOcen(oceny));

const projekty = [
  { pracownik: "Marek", projekt: "A", godziny: 5 },
  { pracownik: "Marek", projekt: "B", godziny: 3 },
  { pracownik: "Ewa", projekt: "A", godziny: 4 },
  { pracownik: "Ewa", projekt: "A", godziny: 2 },
  { pracownik: "Ola", projekt: "C", godziny: 6 }
];

function raportGodzin(tab){
  const raport = {};
  for(const projekt of tab){
    if(!raport[projekt.pracownik]){
      raport[projekt.pracownik]={}  
    }
    if(!raport[projekt.pracownik][projekt.projekt]){
      raport[projekt.pracownik][projekt.projekt]=0;
    }
    raport[projekt.pracownik][projekt.projekt] += projekt.godziny
  }
  return raport;
}
console.log(raportGodzin(projekty))

///3
const produkty = [
  { nazwa: "Kawa", kategoria: "napoje", cena: 20 },
  { nazwa: "Herbata", kategoria: "napoje", cena: 15 },
  { nazwa: "Mleko", kategoria: "nabiał", cena: 8 },
  { nazwa: "Ser", kategoria: "nabiał", cena: 12 },
  { nazwa: "Cukier", kategoria: "słodycze", cena: 5 }
];
function raportKategorii(tab){
const raport = {};
for(const produkt of tab){
  if(!raport[produkt.kategoria]){
    raport[produkt.kategoria] = {
      liczba:0,
      lacznaCena:0
    };
  }
  raport[produkt.kategoria].liczba ++;
  raport[produkt.kategoria].lacznaCena += produkt.cena
}
return raport
}
console.log(raportKategorii(produkty))