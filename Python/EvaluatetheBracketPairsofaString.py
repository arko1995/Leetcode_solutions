class Solution:
    def evaluate(self, s: str, knowledge: list[list[str]]) -> str:
        map = dict(knowledge)
        result = ""
        i = 0
        while i < len(s):
            if s[i] == "(":
                j = i + 1

                while s[j] != ")":
                    j += 1
                key = s[i + 1 : j]

                result += map.get(key, "?")
                i = j + 1
            else:
                result += s[i]
                i += 1

        return result


solution = Solution()
print(solution.evaluate("(name)is(age)yearsold", [["name", "bob"], ["age", "two"]]))
