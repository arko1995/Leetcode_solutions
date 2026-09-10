class Solution:
    def triangleNumber(self, nums: list[int]) -> int:
        nums.sort()

        n = len(nums)
        count = 0
        for i in range(n - 2):
            if n == 0:
                continue

            for j in range(i + 1, n - 1):

                target = nums[i] + nums[j]

                left = j + 1
                right = n - 1

                while left <= right:
                    mid = (left + right) // 2

                    if nums[mid] < target:
                        left = mid + 1
                    else:
                        right = mid - 1

                count += left - j - 1

        return count


solution = Solution()
print(solution.triangleNumber([2, 2, 3, 4]))
