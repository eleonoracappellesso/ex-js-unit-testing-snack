function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return name.charAt(0) + surname.charAt(0);
}

function createSlug(string) {
    return string.toLowerCase();
}

function average(arrNumbers) {
    let sum = 0;
    arrNumbers.forEach(num => {
        sum += num;
    });
    return sum / arrNumbers.length;
}

function createSlug2(string) {
    return string.replace(/\s/g, "-");
}

function isPalindrome(string) {
    const reversedString = string.trim().split("").reverse().join("");
    return string.trim() === reversedString;
}

function createSlug3(title) {
    if (title === " " || title === null) throw new Error("Titolo vuoto o non valido!");
    ;
}

module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3 };