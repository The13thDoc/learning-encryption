/*
Ciphers
*/

// Define Cipher class
// function Cipher() {}


// Define Vigenere class
var Vigenere = function() {
    console.debug('Vigenere object created.');
    // call parent constructor
    //Cipher.call(this);
    // this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // char code 65-90
    this.alphabet = {};

    this.populateUppercaseAlphabet();
};

// Encryption
Vigenere.prototype.E = function(K, M) {
    var i = M + K; // Alpha index of resulting character

    if (i >= alphabet.length) {
        i = i - alphabet.length;
    }
    return i;
};

// Decryption
Vigenere.prototype.D = function(K, C) {
    var i = C - K; // Alpha index of resulting character

    if (i < 0) {
        i = alphabet.length + i;
    }
    return i;
};

Vigenere.prototype.process = function(initial_text, key, F) {
    var result_text = '';
    var key_gen = key;

    for (var i in initial_text) {
        var char = initial_text.charAt(parseInt(i));
        var index = i

        if (key_gen.length === parseInt(i)) {
            var key_index = get_key_index(key, i);
            key_gen += key_gen.substring(key_index, key_index + 1);
        }

        if (alphabet.indexOf(char) !== -1) {
            var M = alphabet.indexOf(char);
            var K = alphabet.indexOf(key_gen.substring(parseInt(i), parseInt(i) + 1));
            var C = F(K, M);

            result_text += alphabet.charAt(C);
        } else {
            result_text += initial_text.charAt(i);
        }
    }

    return result_text;
};

// Generate the next key letter from the original.
Vigenere.prototype.get_key_index = function(key, i) {
    var next_index = i;

    while (next_index >= key.length) {
        next_index = next_index - key.length;
    }
    return next_index;
};

Vigenere.prototype.populateUppercaseAlphabet = function() {
    for (var charCode = 65; charCode <= 90; charCode++) {
        this.alphabet[charCode] = String.fromCharCode(charCode);
    }
    console.debug(this.alphabet);
};

/**
 * Display the given variable and its type.
 */
function displayType(thing) {
    console.debug("var: " + thing + "\ntype: " + typeof thing);
};
