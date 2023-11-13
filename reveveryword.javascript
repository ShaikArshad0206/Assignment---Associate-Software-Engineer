function reverseWords(sentence) {
    return sentence.split(/\b/).map(function(word) {
        return word.split('').reverse().join('');
    }).join('');
}
var inputSentence = "This is a sunny day";
var reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
