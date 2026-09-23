class Solution:
    def numSubseq(self, nums: list[int], target: int) -> int:
        MOD = 1000000007
        n = len(nums)
        nums.sort()
        power = [0] * n
        power[0] = 1

        for i in range(1, n):
            power[i] = (power[i - 1] * 2) % MOD

        count = 0
        left = 0
        right = n - 1

        while left <= right:

            if nums[left] + nums[right] <= target:
                count = (count + power[right - left]) % MOD
                left += 1
            else:
                right -= 1
        return count


solution = Solution()
print(solution.numSubseq([3, 5, 6, 7], 9))
