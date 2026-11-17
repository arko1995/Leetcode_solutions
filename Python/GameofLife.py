class Solution:
    def gameOfLife(self, board: list[list[int]]) -> None:

        m = len(board)
        n = len(board[0])

        directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ]

        for row in range(m):
            for col in range(n):
                live_neighbor = 0
                for [dr, dc] in directions:
                    r = row + dr
                    c = col + dc

                    if r >= 0 and r < m and c >= 0 and c <= n and abs(board[r][c]) == 1:
                        live_neighbor += 1

                if board[row][col] == 1:
                    if live_neighbor < 2 or live_neighbor > 3:
                        board[row][col] = -1

                elif live_neighbor == 3:
                    board[row][col] = 2

        for row in range(m):
            for col in range(n):

                board[row][col] = 1 if board[row][col] > 0 else 0
