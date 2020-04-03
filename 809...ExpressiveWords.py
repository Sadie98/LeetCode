class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:
        count = len(words)

        for word in words:
            sList = list(S)
            wordList = list(word)

            letterIndex = 0
            while letterIndex < len(wordList):
                if len(sList) and word[letterIndex] == sList[0]: # начало всегда должно быть одинаковое
                    if letterIndex + 1 < len(word) and word[letterIndex + 1] == word[letterIndex]: # если следующая такая же, будем уже с ней разбираться
                        del sList[0] # удаляем эту букву, чтобы не мешалась
                        pass
                    else:
                        countSameLetters = 0
                        letter = sList[0]

                        while len(sList) and sList[0] == letter:
                            countSameLetters += 1
                            del sList[0]

                        if countSameLetters < 3 and countSameLetters != 1:
                            count -= 1
                            break
                            
                    
                    if(letterIndex == len(wordList) - 1 and len(sList) != 0):
                        count -= 1
                        break
                        
                    letterIndex += 1
                else:
                    count -= 1
                    break

        return count
