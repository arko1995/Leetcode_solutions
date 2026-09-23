class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:

        if len(word1) != len(word2):
            return False

        word1Map = {}

        for i in range(len(word1)):
            word1Map[word1[i]] = word1Map.get(word1[i], 0) + 1

        word2Map = {}

        for i in range(len(word2)):
            word2Map[word2[i]] = word2Map.get(word2[i], 0) + 1

        for keys in word1Map.keys():
            if keys not in word2Map.keys():
                return False

        c1 = sorted(list(word1Map.values()))
        c2 = sorted(list(word2Map.values()))

        for values in range(len(c1)):
            if c1[values] != c2[values]:
                return False

        return True


solution = Solution()


print(solution.closeStrings("abc", "bca"))
