class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        n = len(grid)
        hashMap = {}
        count = 0

        for i in range(n):
            rowkey = ",".join(map(str, grid[i]))
            hashMap[rowkey] = hashMap.get(rowkey, 0) + 1

        for r in range(n):
            col = []
            for c in range(n):
                col.append(grid[c][r])
            colKey = ",".join(map(str, col))

            if colKey in hashMap:
                count += hashMap[colKey]

        return count


solution = Solution()

print(solution.equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))
