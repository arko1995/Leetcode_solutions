class Solution:
    def resultArray(self, nums: list[int], k: int) -> list[int]:

        ans = [0] * k
        dp = [0] * k

        for x in nums:
            new_dp = [0] * k

            new_dp[x % k] += 1

            for r in range(k):

                if dp[r] > 0:
                    new_remainder = (r * x) % k
                    new_dp[new_remainder] += dp[r]

            for r in range(k):

                ans[r] += new_dp[r]
                dp = new_dp
        return ans


solution = Solution()

print(solution.resultArray([1, 2, 3, 4, 5], 3))
