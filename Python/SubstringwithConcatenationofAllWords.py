class Solution:
    def findSubstring(self, s: str, words: list[str]) -> list[int]:

        result = []

        wordLength = len(words[0])
        wordCount = len(words)
        totalLength = wordCount * wordLength

        need = dict()

        for word in words:
            need[word] = need.get(word, 0) + 1

        for offset in range(0, wordLength):
            left = offset
            right = offset
            count = 0

            seen = dict()

            while right + wordLength <= len(s):
                word = s[right : right + wordLength]
                right += wordLength

                if word not in need:
                    seen.clear()
                    left = right
                    count = 0
                    continue

                seen[word] = seen.get(word, 0) + 1
                count += 1

                while seen.get(word, 0) > need.get(word, 0):
                    leftWord = s[left : left + wordLength]
                    left += wordLength

                    seen[leftWord] = seen.get(leftWord, 0) - 1
                    count -= 1

                if count == wordCount:
                    result.append(left)

                    leftWord = s[left : left + wordLength]

                    left += wordLength

                    seen[leftWord] = seen.get(leftWord, 0) - 1
                    count -= 1
        return result


solution = Solution()


print(solution.findSubstring("barfoothefoobarman", ["foo", "bar"]))
