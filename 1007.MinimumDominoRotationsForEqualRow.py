class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        firstUp = A[0]
        secondDown = B[0]

        firstDownCount = 0
        firstUpCount = 1
        secondDownCount = 1
        secondUpCount = 0

        firstDoubles = 0
        secondDoubles = 0

        for i in range(len(A)):
            if i == 0:
                continue

            if A[i] == firstUp:
                firstUpCount += 1
            if A[i] == secondDown:
                secondUpCount += 1
            if B[i] == firstUp:
                firstDownCount += 1
            if B[i] == secondDown:
                secondDownCount += 1  
            if (A[i] != firstUp and A[i] != secondDown and B[i] != firstUp and B[i] != secondDown):
                return(-1)

            if A[i] == B[i]:
                if A[i] == firstUp:
                    firstDoubles += 1
                if B[i] == secondDown:
                    secondDoubles += 1

        moveFirst = 1000000000
        moveSecond = 1000000000

        if firstDownCount + firstUpCount - firstDoubles >= len(A):
            moveFirst = firstUpCount - firstDoubles if firstDownCount > firstUpCount else  firstDownCount - firstDoubles

        if secondDownCount + secondUpCount - secondDoubles >= len(A):
            moveSecond = secondUpCount - secondDoubles if secondDownCount > secondUpCount else  secondDownCount - secondDoubles

        if moveFirst == 1000000000 and moveSecond == 1000000000:
            return -1
        
        return(min(moveFirst, moveSecond))
        
