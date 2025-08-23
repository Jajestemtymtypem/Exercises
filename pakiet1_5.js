// pakiet1_5.js – Most między pakietem 1 a 2 (logika krok po kroku)
// Cel: ćwiczyć warunki, pętle, tablice/obiekty i stan gry bez zbyt złożonych struktur.
// Twoje zadanie: UZUPEŁNIJ funkcje (miejsca z TODO). Na dole masz testy console.assert.
// Uruchamianie: `node pakiet1_5.js`

// ============ Helpery (przykładowe stałe jak w Chińczyku) ============
const START = [1, 11, 21, 31];      // start pól dla graczy 0..3
const BOARD_MAX = 40;               // zakres pól planszy 1..40

// 1) clamp01 – ogranicz wartość do przedziału [0,1]
// Przykład: clamp01(-3) -> 0, clamp01(0.7) -> 0.7, clamp01(5) -> 1
function clamp01(x) {
  // TODO
}

// 2) wrapBoard – zawijanie pól 1..40 po dodaniu kroku
// Gdy wynik > 40, zawijamy np. 41->1, 45->5
function wrapBoard(pos) {
  // Zakładamy pos >= 1
  // TODO: użyj operatora modulo (%)
}

// 3) hasValue – czy tablica zawiera wartość (bez .includes)
function hasValue(arr, value) {
  // TODO: klasyczna pętla for i porównanie ===
}

// 4) countIf – zlicz ile elementów spełnia warunek (predykat)
// Przykład: countIf([1,2,3,4], x => x%2===0) -> 2
function countIf(arr, predicate) {
  // TODO: iteruj po arr, jeśli predicate(x) true -> zwiększ licznik
}

// 5) nextPos – pozycja po rzucie na planszy głównej (bez domków)
// Wejście: pos (1..40), roll (1..6) -> wynik 1..40 (zawijanie do 1)
function nextPos(pos, roll) {
  // TODO: użyj wrapBoard(pos + roll)
}

// 6) isOwnBlocked – czy pole docelowe zajęte przez własny pionek
// ownPositions – tablica 4 liczb (pozycje gracza), target – liczba
function isOwnBlocked(ownPositions, target) {
  // TODO: zwróć true jeśli ownPositions zawiera target (użyj hasValue)
}

// 7) findEnemy – znajdź wroga na polu target
// allPositions – tablica 4 tablic (po 4 pozycje), me – numer gracza (0..3)
// Zwróć obiekt {player, index} jeśli znajdziesz, inaczej null.
function findEnemy(allPositions, target, me) {
  // TODO: zewnętrzna pętla po graczach, pomiń "me"; wewnętrzna po pionkach
}

// 8) applySimpleMove – zastosuj prosty ruch na planszy 1..40 (bez domków)
// state: { positions: number[][] }  – np. [ [1,0,0,0], [11,0,0,0], ... ]
// player: 0..3, pawnIndex: 0..3, roll: 1..6
// Reguły: 
//  - jeśli pionek stoi na 0 -> NIE rusza się (wyjścia z domu nie liczymy tutaj)
//  - oblicz target = nextPos(cur, roll)
//  - jeśli isOwnBlocked -> ruch niemożliwy (zwróć kopię oryginalnego state)
//  - jeśli na target stoi wróg -> wróg wraca do 0
//  - przesuń pionek na target (zwróć nowy obiekt positions – nie modyfikuj wejścia)
function applySimpleMove(state, player, pawnIndex, roll) {
  const positions = JSON.parse(JSON.stringify(state.positions)); // płytki klon wystarczy
  const cur = positions[player][pawnIndex];
  // TODO: zaimplementuj wg reguł
  return { positions };
}

// ===================== TESTY =====================
(function runTests(){
  console.log("== TESTY pakiet1_5 ==");

  console.assert(clamp01(-3) === 0, "clamp01 #1");
  console.assert(clamp01(0.25) === 0.25, "clamp01 #2");
  console.assert(clamp01(5) === 1, "clamp01 #3");

  console.assert(wrapBoard(1) === 1, "wrapBoard #1");
  // Po uzupełnieniu odkomentuj:
  // console.assert(wrapBoard(41) === 1, "wrapBoard #2");
  // console.assert(wrapBoard(45) === 5, "wrapBoard #3");

  console.assert(hasValue([1,2,3], 2) === true, "hasValue #1");
  console.assert(hasValue([1,2,3], 5) === false, "hasValue #2");

  console.assert(countIf([1,2,3,4], x=>x%2===0) === 2, "countIf #1");
  console.assert(countIf(["a","b","aa"], s=>s.includes("a")) === 2, "countIf #2");

  // nextPos (po uzupełnieniu wrapBoard)
  // console.assert(nextPos(38, 4) === 2, "nextPos #1");
  // console.assert(nextPos(10, 5) === 15, "nextPos #2");

  console.assert(isOwnBlocked([5,0,0,0], 5) === true, "isOwnBlocked #1");
  console.assert(isOwnBlocked([5,0,0,0], 6) === false, "isOwnBlocked #2");

  // findEnemy
  (function(){
    const pos = [
      [1,0,0,0],   // me=0
      [11,0,0,0],  // enemy
      [0,0,0,0],
      [0,0,0,0],
    ];
    const e1 = findEnemy(pos, 11, 1); // na 11 stoi mój gracz (me=1) -> to nie wróg
    console.assert(e1 === null, "findEnemy #1");
    const e2 = findEnemy(pos, 1, 1); // na 1 stoi RED (me=1) -> wróg
    console.assert(e2 !== null && e2.player === 0 && e2.index === 0, "findEnemy #2");
  })();

  // applySimpleMove – prosty przypadek bez bicia
  (function(){
    const st = { positions: [
      [5,0,0,0],   // RED
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]};
    // RED pionek 0, rzut 3 -> na 8
    const st2 = applySimpleMove(st, 0, 0, 3);
    console.assert(st2.positions[0][0] === 8, "applySimpleMove #1");
    // oryginalny stan nie może być zmieniony
    console.assert(st.positions[0][0] === 5, "applySimpleMove #1 immut");
  })();

  // applySimpleMove – bicie przeciwnika
  (function(){
    const st = { positions: [
      [5,0,0,0],    // RED
      [8,0,0,0],    // BLUE
      [0,0,0,0],
      [0,0,0,0],
    ]};
    // RED 0 rzuca 3 -> target 8 (stoi BLUE 0) -> bijemy i wróg wraca do 0
    const st2 = applySimpleMove(st, 0, 0, 3);
    console.assert(st2.positions[0][0] === 8, "applySimpleMove #2 move");
    console.assert(st2.positions[1][0] === 0, "applySimpleMove #2 hit");
  })();

  // applySimpleMove – blokada na własnym
  (function(){
    const st = { positions: [
      [5,8,0,0],   // RED ma pionek na 8
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]};
    // RED 0 rzuca 3 -> target 8 ale zajęte przez RED 1 -> brak ruchu
    const st2 = applySimpleMove(st, 0, 0, 3);
    console.assert(st2.positions[0][0] === 5, "applySimpleMove #3 blocked");
    console.assert(st2.positions[0][1] === 8, "applySimpleMove #3 blocked immut");
  })();

  console.log("Jeśli część assertów jest zakomentowana – odkomentuj je po swojej implementacji.");
})();
