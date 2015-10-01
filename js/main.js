/*
 * Main
 */
var CIPHER_APP = CIPHER_APP || {
    // Encrypt all text in the message box. Put in the the translation box.
    encrypt: function encrypt() {
        var clearText = CIPHER_APP.messageBox.value;
        var key = CIPHER_APP.keyBox.value;
        var translatedText = CIPHER_APP.vigenere.encrypt(clearText, key);

        console.debug('UI:', clearText);
        console.debug('UI:', key);
        console.debug('UI:', translatedText);

        CIPHER_APP.translationBox.value = translatedText;
    },
    // Decrypt all text in the message box. Put it in the translation box.
    decrypt: function decrypt() {
        var clearText = CIPHER_APP.messageBox.value;
        var key = CIPHER_APP.keyBox.value;
        var translatedText = CIPHER_APP.vigenere.decrypt(clearText, key);

        console.debug('UI:', clearText);
        console.debug('UI:', key);
        console.debug('UI:', translatedText);

        CIPHER_APP.translationBox.value = translatedText;
    },
    // Initialize project variables.
    init: function init() {
        CIPHER_APP.messageBox = document.getElementById('messageBox');
        CIPHER_APP.keyBox = document.getElementById('keyBox');
        CIPHER_APP.translationBox = document.getElementById('translationBox');
        CIPHER_APP.vigenere = new Vigenere();

    },
    processVigenere: function processVigenere(text, key) {
        var vigenereObject = new Vigenere();
        var cipherText = vigenereObject.encrypt(text, key);
        var clearText = vigenereObject.decrypt(cipherText, key);

        console.info('==========================');
        console.info('Text:', text);
        console.info('Key:', key);
        console.info('Cipher Text:', cipherText);
        console.info('Clear Text:', clearText);
        console.info('==========================');
    }
};

window.onload = function() {
    console.log(document.getElementById('in-progress').innerHTML);
    console.debug('UI:', 'Inside JS');

    CIPHER_APP.init();

    var encryptButton = document.getElementById('encryptButton');
    encryptButton.addEventListener('click', CIPHER_APP.encrypt, false);

    var decryptButton = document.getElementById('decryptButton');
    decryptButton.addEventListener('click', CIPHER_APP.decrypt, false);
};
