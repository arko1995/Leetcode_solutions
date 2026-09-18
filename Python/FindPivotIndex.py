class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        n = len(nums)
        sumLeft = [0] * n
        sumRight = [0] * n

        sumLeft[0] = nums[0]
        sumRight[-1] = nums[-1]

        for i in range(1, n):
            sumLeft[i] = sumLeft[i - 1] + nums[i]

        for i in range(n - 2, -1, -1):
            sumRight[i] = sumRight[i + 1] + nums[i]

        for i in range(n):

            if sumLeft[i] == sumRight[i]:
                return i

        return -1


solution = Solution()

print(solution.pivotIndex([2, 1, -1]))
