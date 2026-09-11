class Solution:
    def totalNumbers(self, digits: list[int]) -> int:

        numbers = set()

        for i in range(len(digits)):
            if digits[i] == 0:
                continue
            for j in range(len(digits)):
                if i == j:
                    continue
                for k in range(len(digits)):
                    if k == i or k == j:
                        continue
                    number = digits[i] * 100 + digits[j] * 10 + digits[k]

                    if number % 2 == 0:
                        numbers.add(number)
        return len(numbers)


solution = Solution()

print(solution.totalNumbers([1, 2, 3, 4]))
