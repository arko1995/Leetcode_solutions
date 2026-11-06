class Solution:
    def change(self, amount: int, coins: list[int]) -> int:
        m = len(coins)
        memo = [[-1] * (amount + 1) for _ in range(m)]

        def dfs(index, remaining):

            if remaining == 0:
                return 1

            if index >= m or remaining < 0:
                return 0

            if memo[index][remaining] != -1:
                return memo[index][remaining]

            take = 0

            if coins[index] <= remaining:
                take = dfs(index, remaining - coins[index])
            skip = dfs(index + 1, remaining)

            memo[index][remaining] = take + skip

            return take + skip

        return dfs(0, amount)


solution = Solution()

print(solution.change(5, [1, 2, 5]))
