class Solution:
    def createGrid(self, m: int, n: int) -> list[str]:

        grid = [["#"] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):

                if i == 0 or j == n - 1:
                    grid[i][j] = "."

        return list(map(lambda row: "".join(row), grid))


solution = Solution()

print(solution.createGrid(2, 3))
