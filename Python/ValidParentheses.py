class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        map = {")": "(", "}": "{", "]": "["}

        for ch in s:

            if ch == "(" or ch == "{" or ch == "[":
                stack.append(ch)
            else:

                if not stack:
                    return False

                if stack[-1] != map[ch]:
                    return False
                stack.pop()

        return len(stack) == 0


solution = Solution()

print(solution.isValid("()[]{}"))
