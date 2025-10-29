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
