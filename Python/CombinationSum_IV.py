class Solution:
    def combinationSum4(self, nums: list[int], target: int) -> int:

        dp = [0] * (target + 1)

        dp[0] = 1

        for i in range(target + 1):
            for num in nums:

                if num <= i:
                    dp[i] += dp[i - num]

        return dp[target]


solution = Solution()

print(solution.combinationSum4([1, 2, 3], 4))
