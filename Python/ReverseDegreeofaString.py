class Solution:
    def reverseDegree(self, s: str) -> int:

        alphabets = "abcdefghijklmnopqrstuvwxyz"
        reversed = {}

        for i in range(len(alphabets)):
            reversed[alphabets[i]] = len(alphabets) - i

        output = 0

        for i in range(len(s)):

            product = reversed[s[i]] * (i + 1)
            output += product

        return output


solution = Solution()

print(solution.reverseDegree("abc"))
