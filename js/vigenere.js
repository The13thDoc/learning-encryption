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

		if (key_gen.length === i) {

		}

		if (alphabet.indexOf(i, [0]) !== -1) {
			var M = alphabet.indexOf(initial_text, [0]);
			var K = alphabet.indexOf(key_gen, [0]);
			var C = F(K, M);

			result_text += alphabet.charAt(C);
		}else{
			result_text += initial_text.charAt(i);
		}
	}
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
