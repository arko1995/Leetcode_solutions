class myMinHeap:
    def __init__(self) -> None:
        self.heap = []

    def push(self, item):
        self.heap.append(item)

        i = len(self.heap) - 1

        while i > 0:

            parent = (i - 1) // 2

            if self.heap[parent][0] <= self.heap[i][0]:
                break

            self.heap[parent], self.heap[i] = self.heap[i], self.heap[parent]

            i = parent

    def pop(self):

        if len(self.heap) == 1:
            return self.heap.pop()

        top = self.heap[0]
        self.heap[0] = self.heap.pop()

        i = 0
        n = len(self.heap)

        while True:

            left = 2 * i + 1
            right = 2 * i + 2

            smallest = i

            if left < n and self.heap[left][0] < self.heap[smallest][0]:
                smallest = left

            if right < n and self.heap[right][0] < self.heap[smallest][0]:
                smallest = right

            if smallest == i:
                break

            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]

            i = smallest
        return top

    def size(self):
        return len(self.heap)


class Solution:
    def shortestPath(self, n: int, edges: list[list[int]], labels: str, k: int) -> int:

        graph = [[] for _ in range(n)]

        for u, v, w in edges:
            graph[u].append([v, w])

        dist = [[float("inf")] * (k + 1) for _ in range(n)]

        heap = myMinHeap()

        dist[0][1] = 0

        heap.push([0, 0, 1])

        while heap.size() > 0:

            cost, node, count = heap.pop()

            if cost > dist[node][count]:
                continue

            if node == n - 1:
                return cost

            for next, weight in graph[node]:
                new_count = 0

                if labels[node] == labels[next]:
                    new_count = count + 1
                else:
                    new_count = 1

                if new_count > k:
                    continue

                new_cost = weight + cost

                if new_cost < dist[next][new_count]:
                    dist[next][new_count] = new_cost

                    heap.push([new_cost, next, new_count])

        return -1


solution = Solution()

solution.shortestPath(3, [[0, 1, 1], [1, 2, 1], [0, 2, 3]], "aab", 1)
