class Solution:
    def numberOfSets(self, n: int, k: int) -> int:

        MOD = 1000000007

        dp = [[0 for _ in range(k + 1)] for _ in range(n)]
        prefix = [[0 for _ in range(k + 1)] for _ in range(n)]

        for i in range(n):
            dp[i][0] = 1
            prefix[i][0] = i + 1

        for i in range(1, n):
            for j in range(1, k + 1):
                dp[i][j] = dp[i - 1][j]
                dp[i][j] = (dp[i][j] + prefix[i - 1][j - 1]) % MOD
                prefix[i][j] = (prefix[i - 1][j] + dp[i][j]) % MOD

        return dp[n - 1][k]


solution = Solution()

print(solution.numberOfSets(4, 2))
