class Solution:
    def uniquePaths(self, grid: list[list[int]]) -> int:
        MOD = 10**9 + 7
        m = len(grid)
        n = len(grid[0])

        right = [[0] * n for _ in range(m)]
        down = [[0] * n for _ in range(m)]

        right[0][0] = 1

        for i in range(m):
            for j in range(n):

                total = right[i][j] + down[i][j]

                if grid[i][j] == 1:

                    if j + 1 < n:
                        right[i][j + 1] = (right[i][j + 1] + down[i][j]) % MOD
                    if i + 1 < m:
                        down[i + 1][j] = (down[i + 1][j] + right[i][j]) % MOD
                else:

                    if j + 1 < n:
                        right[i][j + 1] = (right[i][j + 1] + total) % MOD
                    if i + 1 < m:
                        down[i + 1][j] = (down[i + 1][j] + total) % MOD

        return (right[m - 1][n - 1] + down[m - 1][n - 1]) % MOD


solution = Solution()


print(solution.uniquePaths([[0, 1, 0], [0, 0, 1], [1, 0, 0]]))
