class Solution:
    def findDifference(self, nums1: list[int], nums2: list[int]) -> list[list[int]]:

        nums1set = set(nums1)
        nums2set = set(nums2)

        return [list(nums1set - nums2set), list(nums2set - nums1set)]


solution = Solution()

print(solution.findDifference([1, 2, 3], [2, 4, 6]))
