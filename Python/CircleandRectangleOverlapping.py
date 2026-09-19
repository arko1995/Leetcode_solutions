class Solution:
    def checkOverlap(
        self,
        radius: int,
        xCenter: int,
        yCenter: int,
        x1: int,
        y1: int,
        x2: int,
        y2: int,
    ) -> bool:

        closestX = None

        if xCenter < x1:
            closestX = x1
        elif xCenter > x2:
            closestX = x2
        else:
            closestX = xCenter

        closestY = None

        if yCenter < y1:
            closestY = y1
        elif yCenter > y2:
            closestY = y2
        else:
            closestY = yCenter

        dx = xCenter - closestX
        dy = yCenter - closestY

        distanceSquared = dx**2 + dy**2

        return distanceSquared <= radius**2


solution = Solution()

print(solution.checkOverlap(1, 0, 0, 1, -1, 3, 1))
