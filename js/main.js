/*
 * Main
 */
console.debug('Inside JS');

var vigenereObject = new Vigenere();
var result = vigenereObject.encrypt('hi', 'key');
console.debug(result);
