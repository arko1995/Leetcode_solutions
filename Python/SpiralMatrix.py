class Solution:
    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:
        top = 0
        bottom = len(matrix) - 1
        left = 0
        right = len(matrix[0]) - 1

        arr = []

        while top <= bottom and left <= right:

            for i in range(left, right + 1):
                arr.append(matrix[top][i])
            top += 1

            for j in range(top, bottom + 1):
                arr.append(matrix[j][right])
            right -= 1

            if top <= bottom:
                for i in range(right, left - 1, -1):
                    arr.append(matrix[bottom][i])
                bottom -= 1

            if left <= right:

                for j in range(bottom, top - 1, -1):
                    arr.append(matrix[j][left])
                left += 1

        return arr


solution = Solution()

print(solution.spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
