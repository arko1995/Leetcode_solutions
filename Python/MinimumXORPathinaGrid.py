class Solution:
    def minCost(self, grid: list[list[int]]) -> int:

        m = len(grid)
        n = len(grid[0])

        dp = [[False] * 1024 for _ in range(n)]

        dp[0][grid[0][0]] = True

        for r in range(m):
            for c in range(n):

                if r == 0 and c == 0:
                    continue

                curr = [False] * 1024
                val = grid[r][c]

                for x in range(1024):

                    if (r > 0 and dp[c][x]) or (c > 0 and dp[c - 1][x]):
                        curr[x ^ val] = True

                dp[c] = curr

        for x in range(1024):
            if dp[n - 1][x]:
                return x

        return -1


solution = Solution()

solution.minCost([[1, 2], [3, 4]])
