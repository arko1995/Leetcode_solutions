class Solution:
    def minChanges(self, s: str) -> int:
        m = len(s)

        if (m % 2) != 0:
            return 0

        count = 0

        for i in range(0, m, 2):

            if s[i] != s[i + 1]:
                count += 1

        return count


solution = Solution()

print(solution.minChanges("1001"))
