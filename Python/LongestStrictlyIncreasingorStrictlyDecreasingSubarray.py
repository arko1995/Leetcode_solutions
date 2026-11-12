class Solution:
    def longestMonotonicSubarray(self, nums: list[int]) -> int:
        best = 1
        up = 1
        down = 1

        for i in range(1, len(nums)):
            up = up + 1 if nums[i - 1] < nums[i] else 1
            down = down + 1 if nums[i - 1] > nums[i] else 1

            best = max(best, up, down)

        return best


solution = Solution()

print(solution.longestMonotonicSubarray([1, 4, 3, 3, 2]))
