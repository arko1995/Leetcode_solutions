class Solution:
    def sumOfSquares(self, nums: list[int]) -> int:
        n = len(nums)

        sum = 0

        for i in range(n):
            isSpecial = n % (i + 1) == 0

            if isSpecial:
                sum += nums[i] ** 2

        return sum


solution = Solution()

print(solution.sumOfSquares([1, 2, 3, 4]))
