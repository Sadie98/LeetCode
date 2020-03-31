class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        a = 0
        b = 0
        
        for digitIndex in range(len(secret)):
            if secret[digitIndex] == guess[digitIndex]:
                a += 1
                secret = list(secret)
                secret[digitIndex] = 'A'
                secret = ''.join(secret)
        
                guess = list(guess)
                guess[digitIndex] = 'B'
                guess = ''.join(guess)
        
        secretDict = {}
        for symbol in secret:
            if symbol in secretDict:
                secretDict[symbol] += 1
            else:
                secretDict[symbol] = 1

        
        for guessDigit in guess:
            if guessDigit in secretDict and secretDict[guessDigit] > 0:
                b += 1
                secretDict[guessDigit] -= 1
        
        
        return str(a) + 'A' + str(b) + 'B' 
