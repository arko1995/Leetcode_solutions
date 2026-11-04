class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:

        m = len(matrix)

        for i in range(m):
            for j in range(i + 1, m):

                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

        for i in range(m):
            matrix[i].reverse()


sol = Solution()

sol.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
