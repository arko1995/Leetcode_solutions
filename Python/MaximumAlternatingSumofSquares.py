class Solution:
    def maxAlternatingSum(self, nums: list[int]) -> int:
        n = len(nums)
        nums = sorted(x * x for x in nums)

        negative_count = n // 2

        return sum(nums[negative_count:]) - sum(nums[:negative_count])


solution = Solution()

print(solution.maxAlternatingSum([1, -1, 2, -2, 3, -3]))
