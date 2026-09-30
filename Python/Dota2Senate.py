from collections import deque


class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        n = len(senate)
        radiant = deque()
        dire = deque()

        for i in range(n):

            if senate[i] == "R":
                radiant.append(i)
            else:
                dire.append(i)

        while len(radiant) > 0 and len(dire) > 0:

            rFront = radiant.popleft()
            dFront = dire.popleft()

            if rFront < dFront:
                radiant.append(rFront + n)
            else:
                dire.append(dFront + n)

        return "Radiant" if len(radiant) > 0 else "Dire"


solution = Solution()

print(solution.predictPartyVictory("RDD"))
