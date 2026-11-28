from math import inf


class Solution:
    def maximumSaleItems(self, items: list[list[int]], budget: int) -> int:

        freq = [0] * 1501
        count = [0] * 1501

        min_price = inf

        for factor, price in items:
            freq[factor] += 1
            min_price = min(min_price, price)

        for i in range(1, 1500):

            for j in range(i, 1500, i):
                count[i] += freq[j]

        dp = [0] * (budget + 1)

        for factor, cost in items:
            value = count[factor]

            for b in range(budget, cost, -1):
                dp[b] = max(dp[b], dp[b - cost] + value)

        ans: int = 0

        for b in range(budget + 1):
            extra = (budget - b) // min_price
            ans = max(ans, dp[b] + extra)

        return ans


solution = Solution()

solution.maximumSaleItems([[6, 2], [2, 6], [3, 4]], 9)
