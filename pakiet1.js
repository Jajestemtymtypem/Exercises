// pakiet1.js – Ćwiczenia z logiki w JS

// 1. Zwróć większą liczbę
function max(a, b) {
    if(a > b){
        return a;
    } else{
        return b;
    }
}

// 2. Sprawdź, czy liczba jest parzysta
function isEven(num) {
    if((num%2) == 0){
        return true;
    }
}

// 3. Zwróć sumę liczb od 1 do n
function sumToN(n) {
    let suma = 0;
    for(let i = 1; i <= n; i++){
        suma += i;
        
    }
    return suma;
}

// 4. Sprawdź, czy tablica zawiera daną wartość
function contains(arr, value) {
    const i = arr.some( p => p === value);
    return i;
}

// 5. Odwróć string
function reverseString(str) {
    let j = [];
    let o = 0;
    for( let i = str.length; i >= 0; i--){
        j[o] = str[i];
        o++;
    }
    return j.join("");
    
}

// 6. Policz wystąpienia litery w stringu
function countChar(str, char) {
    let ilosc= 0;
    for( let i = 0; i < str.length; i++){
        if(str[i] === char){
            ilosc ++;
        }
    }
    return ilosc;
}

// 7. Zwróć najmniejszy element tablicy
function minInArray(arr) {
    let najnizsza = arr[0];
    for( let i = 1; i < arr.length; i++){
        if(arr[i] < najnizsza){
            najnizsza = arr[i];
        }
    }return najnizsza;
}

// 8. Sprawdź, czy liczba jest liczbą pierwszą
function isPrime(num) {
  if(num < 2) return false;
  if(num === 2 ) return true;
  if(num % num === 0&& num / 1 === num) return true;
}

// 9. Zsumuj wszystkie liczby w tablicy
function sumArray(arr) {
    let s = 0;
    for(let i = 0; i < arr.length; i++){
        s += arr[i];
    }return s;
}

// 10. Zwróć tablicę tylko z liczbami większymi od podanej
function filterGreaterThan(arr, x) {
    let newArr = [];
    let o = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > x){
            newArr[o] = arr[i];
            o++;
        }
    }return newArr;
}

// -------------------- TESTY --------------------
console.log(max(5, 10) === 10);
console.log(isEven(4) === true);
console.log(sumToN(5) === 15);
console.log(contains([1, 2, 3], 2) === true);
console.log(reverseString("abc") === "cba");
console.log(countChar("banan", "a") === 2);
console.log(minInArray([5, 2, 9, 1]) === 1);
console.log(isPrime(7) === true);
console.log(sumArray([1, 2, 3]) === 6);
console.log(JSON.stringify(filterGreaterThan([1, 5, 10, 2], 4)) === JSON.stringify([5, 10]));
