class Solution:
    def findMaxForm(self, strs: list[str], m: int, n: int) -> int:

        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for str in strs:
            currentZero = 0
            currentOne = 0

            for item in str:
                if item == "1":
                    currentOne += 1
                else:
                    currentZero += 1

            for i in range(m, currentZero - 1, -1):
                for j in range(n, currentOne - 1, -1):
                    dp[i][j] = max(dp[i][j], 1 + dp[i - currentZero][j - currentOne])

        return dp[m][n]


solution = Solution()


print(solution.findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
