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
  raport["Średnia suma per klient"] = raport["Łączna suma"] / klienci.length;
}return raport;
 
}
console.log(raport(wynik))

function znajdzNajwiekszyZakup(tab){
for(const klient of tab){
  return (klient.zakupy.reduce((a,b)=>{
    b>a
  },0))
}
}
console.log(znajdzNajwiekszyZakup(klienci))
console.log(znajdzNajwiekszyZakup(klienci))