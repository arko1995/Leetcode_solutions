import math


class Solution:
    def minimumSumSubarray(self, nums: list[int], l: int, r: int) -> int:
        m = len(nums)
        ans = math.inf

        for i in range(m):
            total = 0
            for j in range(i, m):
                total += nums[j]
                length = j - i + 1

                if length >= l and length <= r and total > 0:
                    ans = min(ans, total)

        return -1 if ans == math.inf else ans


solution = Solution()

print(solution.minimumSumSubarray([3, -2, 1, 4], 2, 3))
