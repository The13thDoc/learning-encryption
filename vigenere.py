#**
# Vigenere's Cipher
#
# Reference: https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher
#**

import string
import os

message = "This is a common message.".upper()
key = "somekey".upper()
alphabet = string.ascii_uppercase

#**
# Encryption formula.
#
# Ci = Ek(Mi) = (Mi + Ki)
#
# return - Ciphertext character index
#**
def E(K, M):
	i = M + K # Alpha index of resulting character

	if (i >= len(alphabet)):
		i = i - len(alphabet)

	return i

#**
# Decryption formula.
#
# Mi = Dk(Ci) = (Ci - Ki)
#
# return - Plaintext character index
#**
def D(K, C):
	i = C - K # Alpha index of resulting character

	if (i < 0):
		i = len(alphabet) + i

	return i

#**
# Cipher flow. Encryption and decryption.
#
# param:
# 	initial_text - The message being deciphered.
#	key - Key used to decipher.
#	F - Function to encrypt or decrypt
#**
def process(initial_text, key, F):
	result_text = ''
	key_gen = key

	# Iterate though the initial_text
	for i, char in enumerate(initial_text):

		# Key must be the same length as the message.
		# Repeat the letters until lengths match
		if (len(key_gen) == i):
			next_index = i
			
			# Index of next Key character to append
			while (next_index >= len(key)):
				next_index = next_index - len(key)
				
			
			key_gen += key[next_index]

		if (alphabet.find(char) != -1): # if char is a letter
			M = alphabet.index(initial_text[i])
			K = alphabet.index(key_gen[i])
			C = F(K, M) # returns the index

			result_text += alphabet[C]
		else: # if char is NOT a letter (space, dash, etc.)
			result_text += char

	return result_text

#**
# Clear the terminal (linux)
#**
#clear = lambda: os.system('clear') # Linux
clear = lambda: os.system('cls') # Windows


#=====
# Main
#=====
clear()
print 'Trying Vigenere cipher...\n'
print message, '\t Original message'
print process(message, key, E), '\t Encrypted'
print process(message, key, D), '\t Decrypted'
print '\n'
