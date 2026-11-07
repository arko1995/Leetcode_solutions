class MyMinHeap:
    def __init__(self, compare) -> None:
        self.heap = []
        self.compare = compare

    def size(self):
        return len(self.heap)

    def peek(self):
        return self.heap[0]

    def push(self, value):

        self.heap.append(value)

        i = len(self.heap) - 1

        while i > 0:
            parent = (i - 1) // 2

            if self.compare(self.heap[i], self.heap[parent]) >= 0:
                break

            self.heap[parent], self.heap[i] = self.heap[i], self.heap[parent]

            i = parent

    def pop(self):

        if len(self.heap) == 0:
            return None

        result = self.heap[0]
        last = self.heap.pop()

        if len(self.heap) == 0:
            return result

        self.heap[0] = last

        i = 0

        n = len(self.heap)

        while True:

            smallest = i

            left = (i * 2) + 1
            right = (i * 2) + 2

            if left < n and self.compare(self.heap[left], self.heap[smallest]) < 0:
                smallest = left

            if right < n and self.compare(self.heap[right], self.heap[smallest]) < 0:
                smallest = right

            if smallest == i:
                break

            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]

            i = smallest

        return result


class Solution:
    def assignTasks(self, servers: list[int], tasks: list[int]) -> list[int]:

        available = MyMinHeap(lambda a, b: a[0] - b[0] or a[1] - b[1])

        busy = MyMinHeap(lambda a, b: a[0] - b[0] or a[1] - b[1] or a[2] - b[2])

        ans = []
        time = 0

        for i in range(len(servers)):
            available.push([servers[i], i])

        for i in range(len(tasks)):
            time = max(time, i)

            while busy.size() > 0 and busy.peek()[0] <= time:

                free_time, weight, index = busy.pop()

                available.push([weight, index])

            if available.size() == 0:

                time = busy.peek()[0]

                while busy.size() > 0 and busy.peek()[0] <= time:
                    free_time, weight, index = busy.pop()

                    available.push([weight, index])

            weight, index = available.pop()

            ans.append(index)

            busy.push([time + tasks[i], weight, index])

        return ans
