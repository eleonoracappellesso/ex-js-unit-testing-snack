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


module.exports = { getInitials, createSlug, average };