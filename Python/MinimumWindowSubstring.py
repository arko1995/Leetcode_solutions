class Solution:
    def minWindow(self, s: str, t: str) -> str:

        if len(t) > len(s):
            return ""

        need = dict()

        for char in t:
            need[char] = need.get(char, 0) + 1

        window = dict()

        required = len(need)
        left = 0
        have = 0

        minLength = float("inf")
        resultStart = 0
        resultEnd = 0
        for right in range(len(s)):
            char = s[right]

            window[char] = window.get(char, 0) + 1

            if char in need and window.get(char, 0) == need.get(char, 0):
                have += 1

            while have == required:

                windowLength = right - left + 1

                if windowLength < minLength:
                    minLength = windowLength
                    resultStart = left
                    resultEnd = right + 1
                leftChar = s[left]

                window[leftChar] = window.get(leftChar, 0) - 1

                if leftChar in need and window.get(leftChar, 0) < need.get(leftChar, 0):
                    have -= 1

                left += 1
        return "" if minLength == float("inf") else s[resultStart:resultEnd]


solution = Solution()

solution.minWindow("ADOBECODEBANC", "ABC")
