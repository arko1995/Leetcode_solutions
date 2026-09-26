class Solution:
    def asteroidCollision(self, asteroids: list[int]) -> list[int]:

        output = []

        for i in range(len(asteroids)):
            alive = True

            while alive and len(output) > 0 and output[-1] > 0 and asteroids[i] < 0:

                top = output[-1]

                if abs(top) > abs(asteroids[i]):
                    alive = False
                elif abs(top) == abs(asteroids[i]):
                    alive = False
                    output.pop()
                else:
                    output.pop()

            if alive:
                output.append(asteroids[i])
        return output


solution = Solution()

print(solution.asteroidCollision([5, 10, -5]))
