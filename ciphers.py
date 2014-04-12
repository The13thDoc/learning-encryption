###
# Utilize the alphabet. Using ROT13 (where the key is 13),
# encrypting twice should result in the equivalent of
# a decrypt.
###

import string

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

print message
encrypted = encrypt(message, key)
print encrypted
print encrypt(encrypted, key)
print encrypt(encrypt(encrypted, key), key)




