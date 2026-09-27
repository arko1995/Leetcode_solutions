class Solution:
    def reverseParentheses(self, s: str) -> str:

        stack = []
        current = ""

        for i in range(len(s)):

            if s[i] == "(":
                stack.append(current)
                current = ""
            elif s[i] == ")":
                current = stack.pop() + current[::-1]

            else:
                current += s[i]

        return current


solution = Solution()

print(solution.reverseParentheses("(ed(et(oc))el)"))
