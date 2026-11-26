class Solution:
    def canAliceWin(self, n: int) -> bool:

        def take(stones, required, isAlice):
            if stones < required:
                return not isAlice
            return take(stones - required, required - 1, not isAlice)

        return take(n, 10, True)


solution = Solution()


print(solution.canAliceWin(12))
