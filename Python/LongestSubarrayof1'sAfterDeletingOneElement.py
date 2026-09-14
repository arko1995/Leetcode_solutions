class Solution:
    def longestSubarray(self, nums: list[int]) -> int:

        zeroes = 0
        output = 0
        left = 0

        for right in range(len(nums)):

            if nums[right] == 0:
                zeroes += 1

            while zeroes > 1:
                if nums[left] == 0:
                    zeroes -= 1
                left += 1

            output = max(output, right - left)
        return output


solution = Solution()


print(solution.longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
