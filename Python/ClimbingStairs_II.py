import math


class Solution:
    def climbStairs(self, n: int, costs: list[int]) -> int:
        dp = [math.inf] * (n + 1)

        dp[0] = 0

        for i in range(1, n + 1):
            for j in range(1, 4):

                if i - j >= 0:
                    dp[i] = min(dp[i], dp[i - j] + costs[i - 1] + j**2)

        return dp[n]


solution = Solution()

solution.climbStairs(4, [1, 2, 3, 4])
