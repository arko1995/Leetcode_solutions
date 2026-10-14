from functools import reduce


class Solution:
    def maxSumOfSquares(self, num: int, sum: int) -> str:

        if sum > num * 9:
            return ""

        digits = [9] * num

        sum_of_digits = reduce(lambda a, b: a + b, digits, 0)

        difference = sum_of_digits - sum

        index = num - 1

        while difference > 0:

            subtract = min(9, difference)

            difference -= subtract
            digits[index] -= subtract

            index -= 1

        return "".join(map(str, digits))


solution = Solution()
print(solution.maxSumOfSquares(num=2, sum=3))
