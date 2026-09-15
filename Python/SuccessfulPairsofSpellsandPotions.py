class Solution:
    def successfulPairs(
        self, spells: list[int], potions: list[int], success: int
    ) -> list[int]:
        answer = [0] * len(spells)

        potions.sort()

        for i in range(len(spells)):
            spell = spells[i]

            left = 0
            right = len(potions)

            while left < right:
                mid = (left + right) // 2

                if spell * potions[mid] >= success:
                    right = mid

                else:
                    left = mid + 1

            answer[i] = len(potions) - left

        return answer


solution = Solution()

print(solution.successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
