function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return name.charAt(0) + surname.charAt(0);
}

function createSlug(string) {
    return string.toLowerCase();
}


module.exports = { getInitials, createSlug };