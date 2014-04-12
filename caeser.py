# Implementing a Caeser cipher
# THIRD THOUGHT, I'VE BEEN DOING THIS CIPHER WRONG.

###
# Utilize the alphabet. Using ROT13 (where the key is 13),
# encrypting twice should result in the equivalent of
# a decrypt.
###
import string

plainText = "This is a common message."
cipherText = ''
translatedText = ''
key = 5
alphabet = string.ascii_uppercase

# Print the message as is, in plain text, with its indices.
def printPlainText():
    print 'Plain text:\n'
    output = ''
    indexOutput = ''
    
    for index, char in enumerate(plainText):
        output = output + char + '\t'
        indexOutput = indexOutput + str(index) + '\t'

    print indexOutput
    print output

# Print the message in an encrypted form, with its indices.
def encrypt():
    print 'Encrypted text:'
    indexOutput = ''
    charOutput = ''
    cipherIndex = -1
    global cipherText
    
    for index, char in enumerate(plainText):
        if (alphabet.find(char.upper()) != -1):
            foundIndex = alphabet.index(char.upper())
                   
            # set the cipher index
            cipherIndex = foundIndex + key
            if(cipherIndex >= len(alphabet)):
                cipherIndex = cipherIndex - len(alphabet)

            # translate the index
            indexOutput = indexOutput + str(index) + '\t'
            charOutput = charOutput + alphabet[cipherIndex] + '\t'
            cipherText = cipherText + alphabet[cipherIndex]
        else:
               
            # set the cipher index
            cipherIndex = index
            
            # translate the index
            indexOutput = indexOutput + str(index) + '\t'
            charOutput = charOutput + plainText[cipherIndex] + '\t'
            cipherText = cipherText + plainText[cipherIndex]

    print indexOutput
    print charOutput

# Print the message in its decrypted form (should match the plain text form),
# with its indices.
def decrypt():
    print 'Decrypted text:'
    indexOutput = ''
    charOutput = ''
    global translatedText
    cipherIndex = -1
    
    for index, char in enumerate(cipherText):

        # set the cipher index
        cipherIndex = index - key
        
        if(cipherIndex < 0):
            cipherIndex = len(cipherText) + cipherIndex

        # translate the index
        indexOutput = indexOutput + str(cipherIndex) + '\t'
        charOutput = charOutput + cipherText[cipherIndex] + '\t'
        translatedText = translatedText + cipherText[cipherIndex]

    print indexOutput
    print charOutput


printPlainText()
print ''
encrypt()
print ''
decrypt()
print ''
print plainText
print cipherText
print translatedText

