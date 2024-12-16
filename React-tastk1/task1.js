const programminglanguage = ['java', 'javascript', 'c', 'cplusplus', 'react', 'python', 'php', 'laravel', 'kotlin', 'swift', 'flutter', 'sql', 'dart', 'html', 'r', 'perl', 'scala', 'haskell', 'rust', 'go'];
const color =['green', 'blue', 'red', 'orange', 'yellow', 'indigo', 'violet', 'pink', 'brown', 'lavender', 'mint', 'teal', 'purple', 'magenta', 'apricot', 'lime', 'maroon', 'cyan', 'navy', 'olive'];
const pairedArray = programminglanguage.map((language, index) => {
    return { color: color[index], language: language}
});

function findColorByLanguage(inputLanguage) {
    const pair = pairedArray.find(item => item.language.toLowerCase() == inputLanguage.toLowerCase());

    if (pair) {
        return pair.color;
    } else {
        return "Color not found for the given programming language.";
    }
}