class Solution:
    def numOfSubarrays(self, arr: list[int]) -> int:

        even = 1
        odd = 0
        total = 0
        count = 0
        mod = (10**9) + 7
        for num in arr:
            total += num

            if total % 2 == 0:
                count += odd
                even += 1
            else:
                count += even
                odd += 1

        return count % mod


solution = Solution()

print(solution.numOfSubarrays([1, 2, 3, 4, 5, 6, 7]))
