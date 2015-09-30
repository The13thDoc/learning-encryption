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
        console.debug(this.alphabet, 'Length:', this.length);
    };

    // Process text.
    this.process = function(initial_text, key, F) {
        console.debug('Vigenere.process(): ','START FUNCTION');
        console.debug('Vigenere.process(): ', 'Function being passed: ', F.name);

        var result_text = '';
        var key_gen = key;

        for (var i in initial_text) {
            console.debug('Vigenere.process(): ',
            'NEW LOOP===================' +
            '===================', i
            );
            console.debug('Vigenere.process(): ', 'Inside loop \'initial_text\'');
            var char = initial_text.charAt(parseInt(i)).toLocaleUpperCase();
            var index = i;

            console.debug('Vigenere.process(): ', 'char', char);

            console.debug('Vigenere.process(): ', key_gen.length);
            if (key_gen.length === parseInt(i)) {
                console.debug('Vigenere.process(): ', '!!key-gen length = index!!');
                var key_index = get_key_index(key, i);
                key_gen += key_gen.substring(key_index, key_index + 1);
            }

            console.debug('Vigenere.process(): ', this.alphabet[]);
            if (this.alphabet[char] !== -1) {
                console.debug('Vigenere.process(): ', '!!alphabet char doesn\'t exist!!');
                var M = this.alphabet[char];
                var K = this.alphabet[key_gen.substring(parseInt(i), parseInt(i) + 1)];
                console.debug('Vigenere.process(): ', 'M', M);
                console.debug('Vigenere.process(): ', 'K', K);
                var C = F(K, M);
                console.debug('Vigenere.process(): ', 'C', C);

                result_text += that.alphabet[C];
            } else {
                result_text += initial_text.charAt(i);
            }
        }
        console.debug('Vigenere.process(): ',
        'OUT OF LOOP-------------------' +
        '-------------------'
        );

        return result_text;
    };

    this.populateUppercaseAlphabet();
};

// Encrypt.
Vigenere.prototype.encrypt = function(initial_text, key) {
    // Pass E() as a Function object.
    return this.process(initial_text, key, this.E);
};

// Decrypt.
Vigenere.prototype.decrypt = function(initial_text, key) {
    // Pass D() as a Function object.
    return this.process(initial_text, key, this.D);
};

// Display the given variable and its type.
function displayType(thing) {
    console.debug("var: " + thing + "\ntype: " + typeof thing);
};
