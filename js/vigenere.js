/*
 * Vigener class.
*/

// Constructor
var Vigenere = function() {
    this.alphabet = {};
    this.length;
    var that = this;

    // Encryption formula.
    this.E = function E(K, M) {
        var i = M + K; // Alpha index of resulting character

        if (i >= this.length) {
            i = i - this.length;
        }
        return i;
    };

    // Decryption formula.
    this.D = function D(K, C) {
        var i = C - K; // Alpha index of resulting character

        if (i < 0) {
            i = length + i;
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
        this.length = Object.keys(this.alphabet).length;
    };

    // Process text.
    this.process = function(initial_text, key, F) {
        var result_text = '';
        var key_gen = key;

        for (var i in initial_text) {
            var char = initial_text.charAt(i);
            var index = parseInt(i);

            if (key_gen.length === index) {
                var key_index = this.get_key_index(key, index);
                key_gen += key_gen.substring(key_index, key_index + 1);
            }

            if (char.charCodeAt() !== -1) {
                var M = char.charCodeAt();
                var K = key_gen.substring(index, index + 1).charCodeAt();
                var C = F(K, M);

                result_text += String.fromCharCode(C);
            } else {
                result_text += initial_text.charAt(index);
            }
        }
        return result_text;
    };

    this.populateUppercaseAlphabet();
};

// Encrypt the cleartext.
Vigenere.prototype.encrypt = function(initial_text, key) {
    // Pass E() as a Function object.
    return this.process(initial_text, key, this.E);
};

// Decrypt the ciphertext.
Vigenere.prototype.decrypt = function(initial_text, key) {
    // Pass D() as a Function object.
    return this.process(initial_text, key, this.D);
};
