#**
# Vigenere's Cipher
#
# Reference: https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher
#**

import string
import os

plaintext = "This is a common message.".upper()
key = "somekey"
alphabet = string.ascii_uppercase

#**
# Encrypt using Vigenere's cipher.
#
# Ci = Ek(Mi) = (Mi + Ki)
#
# return - Cipher character index
#**
def E(K, M):
	return M + K


#**
# Decrypt using Vigenere's cipher.
#
# Mi = Dk(Ci) = (Ci - Ki)
#
#return - Plaintext character index
#**
def D(K, C):
	return C - K


#**
# Encrypt message.
#
# return - ciphertext
#**
def encrypt(plaintext, key):
	ciphertext = ''
	
	# Iterate through the plaintext
	for i, char in enumerate(plaintext):
		if (alphabet.find(char) != -1): # if char is a letter
			M = alphabet.index(plaintext[i])
			K = alphabet.index(key[i])
			C = E(K,M) # returns the index
	
			ciphertext += alpha[C]
		else: # if char is NOT a letter (space, dash, etc.)
			ciphertext += char
		
		return ciphertext


#**
# Decrypt message.
#
# return - plaintext
#**
def decrypt(ciphertext, key):
	plaintext = ''
	
	# Iterate through the ciphertext
	for i, char in enumerate(ciphertext):
		if (alphabet.find(char) != -1): # if char is a letter
			M = alphabet.index(ciphertext[i])
			K = alphabet.index(key[i])
			C = D(K,M) # returns the index
	
			plaintext += alpha[C]
		else: # if char is NOT a letter (space, dash, etc.)
			plaintext += char
		
		return plaintext



