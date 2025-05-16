const { getInitials, createSlug } = require("./unitTesting.js");


// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

//Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("CIAO")).toBe("ciao");
    expect(createSlug("arRIVedErcI")).toBe("arrivederci");
    expect(createSlug("Buonanotte")).toBe("buonanotte");
});

// //Snack 3
// test("La funzione average calcola la media aritmetica di un array di numeri.", () => {

// })

// //Snack 4
// test("La funzione createSlug sostituisce gli spazi con -.", () => {

// })

// //Snack 5
// test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {

// })

// //Snack 6
// test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {

// })

// //Snack 7
// test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {

// })

