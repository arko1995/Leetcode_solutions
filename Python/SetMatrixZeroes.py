class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        m = len(matrix)
        n = len(matrix[0])

        affected_rows = set()
        affected_cols = set()

        for r in range(m):
            for c in range(n):
                if matrix[r][c] == 0:
                    affected_rows.add(r)
                    affected_cols.add(c)

        for r in range(m):
            for c in range(n):

                if c in affected_cols or r in affected_rows:
                    matrix[r][c] = 0


sol = Solution()
sol.setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])
