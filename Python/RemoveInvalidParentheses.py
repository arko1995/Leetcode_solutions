class Solution:
    def removeInvalidParentheses(self, s: str) -> list[str]:
        left_remove = 0
        right_remove = 0

        for ch in s:
            if ch == "(":
                left_remove += 1
            elif ch == ")":
                if left_remove > 0:
                    left_remove -= 1
                else:
                    right_remove += 1

        result = set()

        def build(index, current, balance, left_remove, right_remove):

            if index == len(s):
                if balance == 0 and left_remove == 0 and right_remove == 0:
                    result.add(current)
                return
            char = s[index]

            if char == "(":
                if left_remove > 0:
                    build(index + 1, current, balance, left_remove - 1, right_remove)

                build(
                    index + 1,
                    current + char,
                    balance + 1,
                    left_remove,
                    right_remove,
                )

            elif char == ")":
                if right_remove > 0:
                    build(index + 1, current, balance, left_remove, right_remove - 1)
                if balance > 0:
                    build(
                        index + 1,
                        current + char,
                        balance - 1,
                        left_remove,
                        right_remove,
                    )
            else:
                build(index + 1, current + char, balance, left_remove, right_remove)

        build(0, "", 0, left_remove, right_remove)

        return list(result)


solution = Solution()

print(solution.removeInvalidParentheses("()())()"))
