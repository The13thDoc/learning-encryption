#**
# Caesar cipher.
#**

import string
import os

message = "This is a common message.".upper()
cipherText = ''
translatedText = ''
key = 13
alphabet = string.ascii_uppercase

# Encrypt the desired text, using Caeser's cipher.
def encrypt(plainText, key):
    translatedText = ''
    cipherIndex = 0;

    for index, char in enumerate(plainText):
		if (alphabet.find(char.upper()) != -1):
			cipherIndex = alphabet.index(char.upper()) + key
		
			if (cipherIndex >= len(alphabet)):
				cipherIndex = cipherIndex - len(alphabet)

			# Translate
			translatedText = translatedText + alphabet[cipherIndex]
		else: # A different character (space, dash, etc.)
			translatedText = translatedText + char

    return translatedText

# Decrypt the desired text, using Caser's cipher.
def decrypt(cipherText, key):
    translatedText = ''
    cipherIndex = 0;

    for index, char in enumerate(cipherText):
		if (alphabet.find(char.upper()) != -1):
			cipherIndex = alphabet.index(char.upper()) - key

			if (cipherIndex < 0):
				cipherIndex = len(alphabet) + cipherIndex

			# Translate
			translatedText = translatedText + alphabet[cipherIndex]
		else: # A different character (space, dash, etc.)
			translatedText = translatedText + char


    return translatedText

#**
# ROT13 encryption (where the key is 13).
# Encrypting twice should result in the equivalent of
# a decrypt.
#**
def rot_13_encryption(text):
	return encrypt(text, key)

#**
# ROT13 decryption.
#**
def rot_13_decryption(text):
	return decrypt(text, key)


#**
# Clear the terminal (linux)
#**
clear = lambda: os.system('clear')

#=====
# Main
#
# This is to show that ROT13 encryption, which is using a Caesar cipher
# with a key of 13, decrypts itself using an ecryption. This occurs
# because 13 is half of 26 (the length of the alphabet).
#
# This assumes simple conditions:
# - Any characters NOT i nthe alphabet are left as is (spaces, dashes, etc.)
# - All characters will be converted to either uppercase. Lowercase
# would be fine as well.
#=====
clear()
print 'Trying ROT13 encryption...\n'
print message, '\t Original message'
print rot_13_encryption(message), '\t Encrypted'
print rot_13_encryption(rot_13_encryption(message)), '\t Encrypted again'




