class Solution:
    def maxLength(self, nums: list[int]) -> int:

        def GCD(a, b):

            while b > 0:
                temp = b
                b = a % b
                a = temp
            return a

        def LCM(a, b):
            return (a * b) / GCD(a, b)

        max_len = 0

        for i in range(len(nums)):
            prod = 1
            gcd = 0
            lcm = 1

            for j in range(i, len(nums)):
                prod *= nums[j]
                gcd = GCD(gcd, nums[j])
                lcm = LCM(lcm, nums[j])

                if prod == gcd * lcm:
                    max_len = max(max_len, j - i + 1)

        return max_len


solution = Solution()
solution.maxLength([1, 2, 1, 2, 1, 1, 1])
