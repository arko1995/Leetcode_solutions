class Solution:
    def smallestIndex(self, nums: list[int]) -> int:

        n = len(nums)

        for i in range(n):
            sum = 0
            num = nums[i]

            while num > 0:
                sum += num % 10
                num = num // 10

            if sum == i:
                return i

        return -1


solution = Solution()

print(solution.smallestIndex([1, 10, 11]))
