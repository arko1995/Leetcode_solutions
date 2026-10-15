class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        n = len(nums)
        result = 0

        for i in range(n):
            empty_set = set()

            for j in range(i, n):
                empty_set.add(nums[j])

                result += len(empty_set) ** 2
        return result


solution = Solution()

print(solution.sumCounts([1, 2, 1]))
