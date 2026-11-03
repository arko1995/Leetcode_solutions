class Solution:
    def minMoves(self, nums: list[int]) -> int:
        max_num = max(nums)

        moves = 0

        for num in nums:

            moves += max_num - num

        return moves


solution = Solution()


print(solution.minMoves([4, 4, 5]))
