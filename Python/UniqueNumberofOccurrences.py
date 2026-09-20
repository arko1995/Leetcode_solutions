class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:

        occurrences = {}

        for i in range(len(arr)):
            occurrences[arr[i]] = occurrences.get(arr[i], 0) + 1

        unique_values = set(occurrences.values())

        return len(unique_values) == len(occurrences.values())


solution = Solution()


print(solution.uniqueOccurrences([1, 2, 2, 1, 1, 3]))
