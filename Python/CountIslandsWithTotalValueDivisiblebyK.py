class Solution:
    def countIslands(self, grid: list[list[int]], k: int) -> int:

        rows = len(grid)
        cols = len(grid[0])

        def is_island(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols:
                return 0

            if grid[r][c] == 0:
                return 0

            value = grid[r][c]

            grid[r][c] = 0

            up = is_island(r - 1, c)
            down = is_island(r + 1, c)
            left = is_island(r, c - 1)
            right = is_island(r, c + 1)

            return value + up + down + left + right

        count = 0

        for r in range(rows):
            for c in range(cols):

                if grid[r][c] > 0:
                    sum = is_island(r, c)

                    if sum % k == 0:
                        count += 1
        return count


solution = Solution()
print(
    solution.countIslands(
        [
            [0, 2, 1, 0, 0],
            [0, 5, 0, 0, 5],
            [0, 0, 1, 0, 0],
            [0, 1, 4, 7, 0],
            [0, 2, 0, 0, 8],
        ],
        5,
    )
)
