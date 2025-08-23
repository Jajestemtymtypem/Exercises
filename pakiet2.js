
// pakiet2.js – Logika inspirowana grą Chińczyk (Ludo)

// 1. Przejście do domku końcowego
// Zwraca true, jeśli pionek gracza 'player' może wejść na pole końcowe przy ruchu 'steps'.
function canEnterHome(pos, steps, player) {
    if( player +)
}

// 2. Oblicz nową pozycję po ruchu, uwzględniając zawijanie pól (1-40)
function newPosition(pos, steps) {
    // TODO: uzupełnij
}

// 3. Sprawdź, czy na polu jest przeciwnik (arr to tablica pozycji pionków wszystkich graczy)
function hasOpponentOnSpot(arr, spot, player) {
    // TODO: uzupełnij
}

// 4. Zbicie pionka – jeśli na polu jest przeciwnik, zwróć jego pozycję w tablicy
function findOpponentIndex(arr, spot, player) {
    // TODO: uzupełnij
}

// 5. Lista możliwych ruchów dla gracza
function possibleMoves(positions, dice, player) {
    // TODO: uzupełnij
}

// 6. Licznik szóstek – zwraca true, jeśli gracz przekroczył limit 3 kolejnych szóstek
function sixCounter(history) {
    // TODO: uzupełnij
}

// -------------------- TESTY --------------------

console.assert(canEnterHome(38, 2, 0) === false, "Test 1 failed");
// console.assert(canEnterHome(39, 2, 0) === true, "Test 2 failed");
// console.assert(newPosition(39, 3) === 2, "Test 3 failed");
// console.assert(hasOpponentOnSpot([[1,0,0,0],[5,0,0,0]], 5, 0) === true, "Test 4 failed");
// console.assert(findOpponentIndex([[1,0,0,0],[5,0,0,0]], 5, 0) === 0, "Test 5 failed");
// console.assert(JSON.stringify(possibleMoves([[1,0,0,0],[5,0,0,0]], 6, 0)) === JSON.stringify([0]), "Test 6 failed");
// console.assert(sixCounter([6,6,6]) === true, "Test 7 failed");
