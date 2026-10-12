import random


class Solution:

    def __init__(self, w: list[int]):

        self.prefix = []

        sum = 0

        for weight in w:
            sum += weight

            self.prefix.append(sum)

        self.total = sum

    def pickIndex(self) -> int:

        target = random.randint(1, self.total)

        left = 0
        right = len(self.prefix) - 1

        while left < right:
            mid = (left + right) // 2

            if self.prefix[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left
