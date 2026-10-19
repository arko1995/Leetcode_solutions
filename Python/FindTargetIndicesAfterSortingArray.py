class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        ans_map = {}
        n = len(nums)
        nums.sort()

        for i in range(n):
            if nums[i] == target:
                ans_map[i] = i

        return list(ans_map.values())


solution = Solution()

print(solution.targetIndices([1, 2, 5, 2, 3], 2))
