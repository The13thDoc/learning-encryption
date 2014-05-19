/**
 * Vigenere's cipher
 */

var alphabet = 'ABCDEFGHIJKLMNAOPQRSTUVWXYZ';

/**
 * Encryption formula.
 *
 * Ci = Ek(Mi) = (Mi + Ki)
 *
 * return - Ciphertext character index
 */
function E(K, M) {
	var i = M + K; // Alpha index of resulting character

	if (i >= alphabet.length) {
		i = i - alphabet.length;
	}
	return i;
}

/**
 * Decryption formula.
 *
 * Mi = Dk(Ci) = (Ci - Ki)
 *
 * return - Plaintext character index
 */
function D(K, C){
	var i = C - K; // Alpha index of resulting character

	if (i < 0) {
		i = alphabet.length + i;
	}
	return i;
}

/**
 * Cipher flow.
 *
 * initial_text - The message being deciphered.
 * key - Key used to decipher.
 * F - Function to encrypt or decrypt
 */
function process (initial_text, key, F) {
	var result_text = '';
	var key_gen = key;

	for (var i in initial_text) {
		var char = initial_text.charAt(parseInt(i));
		var index = i
		console.debug(i + ": " + typeof i);
		console.debug(i + ": " + typeof char);
		
		if (alphabet.indexOf(char) !== -1) {
			console.debug("Processing: " + char + "(" + index  + ")")
			if (key_gen.length === parseInt(i)) {
				console.debug('in here');
				var index = get_key_index(key, i);
				key_gen += key_gen.substring(index, index + 1);
			}
			var M = alphabet.indexOf(char);
			var K = alphabet.indexOf(key_gen.substring(parseInt(i), parseInt(i) + 1));
			var C = F(K, M);

			result_text += alphabet.charAt(C);
		}else{
			result_text += initial_text.charAt(i);
		}
	}
	console.debug(initial_text);
	console.debug(key_gen);
	console.debug(result_text);
	
	//return result_text;
}

/**
 * Generate the next key letter from the original.
 *
 *  return - Index of the next key character.
 */
function get_key_index (key, i) {
	var next_index = i;

	while (next_index >= key.length) {
		next_index = next_index - key.length;
	}
	return next_index;
}
