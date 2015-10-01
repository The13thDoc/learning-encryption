/*
 * Main
 */

function process(text, key) {
    var vigenereObject = new Vigenere();
    var cipherText = vigenereObject.encrypt(text, key);
    var clearText = vigenereObject.decrypt(cipherText, key);

    console.info('==========================');
    console.info('Text:', text);
    console.info('Key:', key);
    console.info('Cipher Text:', cipherText);
    console.info('Clear Text:', clearText);
    console.info('==========================');
};

window.onload = function() {
    console.log(document.getElementById('in-progress').innerHTML);
    console.debug('Inside JS');

    process('hi', 'key');
    process('Hey, Tayler!', 'Iloveyou');
};
