class Solution:
    def largestOverlap(self, img1: list[list[int]], img2: list[list[int]]) -> int:
        best = 0

        n = len(img1[0])

        def countOverLap(img1, img2, rowShift, colShift):
            overlap = 0

            for r in range(n):
                for c in range(n):

                    shiftedRow = r + rowShift
                    shiftedCol = c + colShift

                    isValid = (
                        shiftedRow >= 0
                        and shiftedRow < n
                        and shiftedCol >= 0
                        and shiftedCol < n
                    )

                    if (
                        isValid
                        and img1[r][c] == 1
                        and img2[shiftedRow][shiftedCol] == 1
                    ):
                        overlap += 1
            return overlap

        for row in range(-n, n):
            for col in range(-n, n):

                current = countOverLap(img1, img2, row, col)

                best = max(best, current)
        return best


solution = Solution()


print(
    solution.largestOverlap(
        [[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]]
    )
)
