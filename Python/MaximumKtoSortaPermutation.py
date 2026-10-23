class Solution:
    def sortPermutation(self, nums: list[int]) -> int:

        n = len(nums)
        k = -1

        for i in range(n):
            if nums[i] != i:
                k &= nums[i]

        return 0 if k == -1 else k


solution = Solution()


print(solution.sortPermutation([0, 1, 3, 2]))
