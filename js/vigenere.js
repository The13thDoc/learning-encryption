/**
 * Vigenere's cipher
 */

var alphabet;

function E(K, M) {
	var i = M + K; // Alpha index of resulting character

	if (i >= alphabet.length) {
		i = i - alphabet.length;
	}
	return i;
}

E;