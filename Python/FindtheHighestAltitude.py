class Solution:
    def largestAltitude(self, gain: list[int]) -> int:

        prefix = [0]

        currentAlt = 0

        for i in range(len(gain)):
            currentAlt += gain[i]

            prefix.append(currentAlt)

        return max(prefix)


solution = Solution()

print(solution.largestAltitude([-5, 1, 5, 0, -7]))
