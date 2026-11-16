class Solution:
    def digitSum(self, s: str, k: int) -> str:

        while len(s) > k:
            string = ""

            i = 0

            while i < len(s):
                current_string = ""

                current_string += s[i : i + k]

                string += str(sum(map(lambda x: int(x), current_string)))

                i += k
            s = string

        return string


solution = Solution()

print(solution.digitSum("11111222223", 3))
