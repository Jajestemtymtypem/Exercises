const auto={
  brand: "Audi",
  model: "A8",
  color: "green",
  years: 2020
}
for(const key in auto){
  console.log(`${key}: ${auto[key]}`)
}//interuje obiekt wypisuje wartosc za wartoscia 

const tab =[1,2,3,4,5,6,7,8,9,10];
for(const num of tab){
  console.log(num);
}//interuje tablice wypisuje jedna za drugą liczbę z tablicy

Object.entries(auto).forEach(([parametr, wartosc])=> {
  console.log(`Parametr: ${parametr}: ${wartosc}`)
})//zmienia obiekt na tablice par klucz watosc i wypisuje ją jedną po drugiej. 

//1 pierwsze nie robie bo już zrobiłem w przykłądzie wyżej szkoda czasu na przepisywanie.

//2
const players = [
  { name: "Adam", score: 120 },
  { name: "Ewa", score: 98 },
  { name: "Ola", score: 135 }
];
// wypisz: "Adam ma 120 pkt." itd.

for(const player of players){
  console.log(`${player.name} ma ${player.score} pkt.`)
}

//3
const product = { name: "Laptop", price: 3500, stock: 12 };
// wypisz: "name: Laptop | price: 3500 | stock: 12"
Object.entries(product).forEach(([key, value])=>{
  console.log(`${key}: ${value}`)
})
//4
const data = {
  red: [10, 20],
  blue: [5, 15],
};
for (const color in data){
  const suma = data[color].reduce((acc, curr)=> acc+curr,0)
  console.log(`${color} -> ${suma}`)
 
}
// 3. 10 minut – quiz logiczny (bez kodu)

// Spróbuj odpowiedzieć z głowy:

// Co wypisze for...in dla tablicy? underfind for in to dla obiektów

// Czy Object.keys() zwraca tablicę? tak tablice kluczy 

// Jak dostać się do wartości price w tablicy obiektów products?tablice rozbił bym przez for of a następnie albo odwołał się do pary albo przez .value albo reduce

// mini projekt powtórkowy
function analizujUzytkownikow(users) {
  const tab = Object.entries(users)
  for(const user of tab){
    user.reduce((nameUser, scoreUser)=>{
      if(scoreUser>50){
        console.log(`Użytkownik:${nameUser} | Punkty:${scoreUser} | Status: OK`)
      }else{
         console.log(`Użytkownik:${nameUser} | Punkty:${scoreUser} | Status: LOW`)
      }
    })
  }
  // użyj Object.entries() i wypisz raport:
  // "Użytkownik: X | Punkty: Y | Status: OK jeśli Y>=50, LOW jeśli mniej"
}

analizujUzytkownikow({
  Ania: 80,
  Tomek: 45,
  Basia: 100,
});
