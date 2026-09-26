class Solution:
    def removeStars(self, s: str) -> str:
        stack = []

        for ch in s:
            if len(stack) > 0 and ch == "*":
                stack.pop()
            else:
                stack.append(ch)

        return "".join(stack)


solution = Solution()
print(solution.removeStars("leet**cod*e"))
