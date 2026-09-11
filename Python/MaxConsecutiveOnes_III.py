class Solution:
    def longestOnes(self, nums: list[int], k: int) -> int:

        maxOnes = 0

        left = 0
        zeroes = 0

        for right in range(len(nums)):
            if nums[right] == 0:
                zeroes += 1
            while zeroes > k:
                if nums[left] == 0:
                    zeroes -= 1
                left += 1
            maxOnes = max(maxOnes, right - left + 1)

        return maxOnes


solution = Solution()


print(solution.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
