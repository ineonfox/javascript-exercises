const palindromes = function (str) {
    const fixedString = str
        .replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .toLowerCase();
    const reversedString = fixedString
        .split('')
        .reverse()
        .join('');
    return fixedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
