class Solution:
    def minimumCost(
        self, cost1: int, cost2: int, costBoth: int, need1: int, need2: int
    ) -> int:

        min_need = min(need1, need2)
        rem1 = need1 - min_need
        rem2 = need2 - min_need

        individual_cost = (need1 * cost1) + (need2 * cost2)
        overlapping_cost = max(need2, need1) * costBoth
        combined_cost = (min_need * costBoth) + (rem1 * cost1) + (rem2 * cost2)

        return min(individual_cost, overlapping_cost, combined_cost)


solution = Solution()
solution.minimumCost(3, 2, 1, 3, 2)
