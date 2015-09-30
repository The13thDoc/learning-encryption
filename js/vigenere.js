/*
 * Vigener class.
*/

// Define Cipher class
// function Cipher() {}


// Constructor
var Vigenere = function() {
    console.debug('Vigenere object created.');
    // call parent constructor
    //Cipher.call(this);
    this.alphabet = {};
    var that = this;

    // Encrypt.
    this.E = function(K, M) {
        var i = M + K; // Alpha index of resulting character

        if (i >= alphabet.length) {
            i = i - alphabet.length;
        }
        return i;
    };

    // Decrypt.
    this.D = function(K, C) {
        var i = C - K; // Alpha index of resulting character

        if (i < 0) {
            i = alphabet.length + i;
        }
        return i;
    };

    // Generate the next key letter from the original.
    this.get_key_index = function(key, i) {
        var next_index = i;

        while (next_index >= key.length) {
            next_index = next_index - key.length;
        }
        return next_index;
    };

    // Initialize the uppercase alphabet JSON.
    this.populateUppercaseAlphabet = function() {
        for (var charCode = 65; charCode <= 90; charCode++) {
            this.alphabet[charCode] = String.fromCharCode(charCode);
        }
        console.debug(this.alphabet);
    };

    this.populateUppercaseAlphabet();
};

// Process text.
Vigenere.prototype.process = function(initial_text, key, F) {
    console.debug('Inside Vigenere.process()');
    var result_text = '';
    var key_gen = key;

    for (var i in initial_text) {
        var char = initial_text.charAt(parseInt(i));
        var index = i

        if (key_gen.length === parseInt(i)) {
            var key_index = get_key_index(key, i);
            key_gen += key_gen.substring(key_index, key_index + 1);
        }

        if (this.alphabet[char] !== -1) {
            var M = this.alphabet[char];
            var K = this.alphabet[key_gen.substring(parseInt(i), parseInt(i) + 1)];
            var C = F(K, M);

            result_text += that.alphabet[C];
        } else {
            result_text += initial_text.charAt(i);
        }
    }

    return result_text;
};

// Display the given variable and its type.
function displayType(thing) {
    console.debug("var: " + thing + "\ntype: " + typeof thing);
};
