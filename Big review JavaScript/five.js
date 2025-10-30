//1
  const zamowienia = [
  { klient: "Ania", produkty: [{ nazwa: "Laptop", cena: 3500, szt: 1 }, { nazwa: "Mysz", cena: 120, szt: 2 }] },
  { klient: "Kuba", produkty: [{ nazwa: "Kawa", cena: 30, szt: 5 }, { nazwa: "Czekolada", cena: 8, szt: 10 }] },
  { klient: "Ola", produkty: [{ nazwa: "Monitor", cena: 900, szt: 1 }, { nazwa: "Klawiatura", cena: 200, szt: 1 }] },
  { klient: "Tomek", produkty: [{ nazwa: "Laptop", cena: 3500, szt: 2 }, { nazwa: "Mysz", cena: 120, szt: 1 }] }
];
function raportProduktow(tab){
  const raport = {};
  for(const zamowienie of tab){
   for(const produkt of zamowienie.produkty){
    console.log(produkt.nazwa)
    if(!raport[produkt.nazwa]){
      raport[produkt.nazwa] ={
      liczbaZamowien: 0,
      sprzedaneSztuki: 0,
      lacznaWartosc: 0
      };
    }
    raport[produkt.nazwa].liczbaZamowien += 1;
    raport[produkt.nazwa].sprzedaneSztuki += produkt.szt;
    raport[produkt.nazwa].lacznaWartosc += produkt.cena * produkt.szt;
   }
  }
  return raport
}
const raport = raportProduktow(zamowienia);
console.log(raport);


/////////////////////////////////
let kopiaRaportu=[];
function analizujKlientow(tab){
  const raport = [];
  for(const zamowienie of tab){
    const sumaZakupow = zamowienie.produkty.map(nazwa =>(nazwa.cena * nazwa.szt)).reduce((a,b)=>a+b,0);
    const iloscSztuk = zamowienie.produkty.map(nazwa =>(nazwa.szt)).reduce((a,b)=>a+b,0);
    const sredniaCena = (sumaZakupow/iloscSztuk).toFixed(2);
    let status ="";
    if(sumaZakupow > 4000) status = "VIP";
    else if(sumaZakupow < 1000) status = "LOW"
    else status = "STANDARD";
    const klient = {imie:zamowienie.klient, suma:sumaZakupow, iloscSztuk, sredniaCena,status}
    raport.push(klient)
  
  }
  kopiaRaportu = raport;
  return raport
}
console.log(analizujKlientow(zamowienia))

function raportSprzedazy(tab){
  const raport = {"VIP": 0, "STANDARD":0, "LOW":0, "Łączna sprzedaż":0, "Średnia na klienta":0}
  for(const klient of tab){
    if(klient.status == "VIP") raport["VIP"]++;
    else if(klient.status == "STANDARD") raport["STANDARD"]++;
    else raport["LOW"]++;
    raport["Łączna sprzedaż"] += klient["suma"]
    
    
  }
  raport["Średnia na klienta"] = ((raport["Łączna sprzedaż"]/tab.length)).toFixed(2)
 return raport
}
console.log(raportSprzedazy(kopiaRaportu))

///////
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

/////
//1
const produkty = [
  { nazwa: "Kawa", cena: 20 },
  { nazwa: "Mleko", cena: 8 },
  { nazwa: "Kawa", cena: 22 },
  { nazwa: "Mleko", cena: 11 },
  { nazwa: "Cukier", cena: 5 }
];
const raport = produkty.reduce((acc, produkt) => {
  if(!acc[produkt.nazwa]) acc[produkt.nazwa] = { liczba: 0, lacznaCena: 0 };
  acc[produkt.nazwa].liczba ++;
  acc[produkt.nazwa].lacznaCena += produkt.cena;
  return acc;
},{});


console.log(raport)

// function elo(tab){
//   const raport = {};
//   for(const produkt of tab){
//     if(!raport[produkt.nazwa]){
//       raport[produkt.nazwa] = {
//         liczba:0,
//         cena:0
//       };
//     }
//     raport[produkt.nazwa].liczba ++
//     raport[produkt.nazwa].cena += produkt.cena
//   }
//   return raport
// }
// console.log(elo(produkty))

// zadanie nr 1 metodę z reduce musiałem przepisać z twojego gotowaca przeanalizowałem zrobiłem błąd szukalem suzkałem aż znalazłem. ale zanim zaczołem robić z reduce to zrobiłem na próbę po staremu tak jak wczoraj jest w komentarzu i to już robiłem sam i działa :D
//2
const oceny = [
  { imie: "Ania", przedmiot: "matematyka", ocena: 5 },
  { imie: "Ania", przedmiot: "polski", ocena: 4 },
  { imie: "Kuba", przedmiot: "matematyka", ocena: 3 },
  { imie: "Kuba", przedmiot: "polski", ocena: 5 }
];

const raportUczniow = oceny.reduce((acc, ocena) =>{
  if(!acc[ocena.imie]) acc[ocena.imie]={};
  acc[ocena.imie][ocena.przedmiot] = ocena.ocena
  return acc;
},{});
console.log(raportUczniow)
//2 bonus usiadłem do robienie i zastanawiałem się po co upraszaczać ten kod jak on jest taki prosty i gdzie niby miał bym dać drugie reduce i podejrzałem rozwiązanie bez sensu jest teraz je przepisywać . iwidzę że jest to mega trudne do zrozumienia .




// niestety zrobiłem błąd kóry przewidziałeś napisałem zadanie i nie dizałło poprawnie jak przeczytałem twoją podpowiedz okazałą się wpunkt i naprawiło się prawidłowe czytanie i zapisanie danych. 
//3
const zamowienia = [
  { klient: "Ania", kwota: 350 },
  { klient: "Ania", kwota: 150 },
  { klient: "Kuba", kwota: 50 },
  { klient: "Kuba", kwota: 600 },
  { klient: "Ola", kwota: 100 }
];
const raportZamowienia = zamowienia.reduce((acc, zamowienie)=>{
  if(!acc[zamowienie.klient]) acc[zamowienie.klient] = {suma:0, status:""};
  acc[zamowienie.klient].suma += zamowienie.kwota;
  if(acc[zamowienie.klient].suma >= 600) acc[zamowienie.klient].status ="VIP";
  else if(acc[zamowienie.klient].suma <= 100) acc[zamowienie.klient].status = "LOW"
  else acc[zamowienie.klient].status = "STANDARD"
  return acc;
}, {})
console.log(raportZamowienia);