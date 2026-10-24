class Solution:
    def countDaysTogether(
        self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str
    ) -> int:

        days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        def get_day_of_year(date):

            [month, day] = map(int, date.split("-"))

            day_of_year = day

            for i in range(month - 1):
                day_of_year += days_in_months[i]

            return day_of_year

        alice_arrival = get_day_of_year(arriveAlice)
        alice_leave = get_day_of_year(leaveAlice)
        bob_arrival = get_day_of_year(arriveBob)
        bob_leave = get_day_of_year(leaveBob)

        result = min(bob_leave, alice_leave) - max(alice_arrival, bob_arrival) + 1

        return max(0, result)


solution = Solution()

print(solution.countDaysTogether("08-15", "08-18", "08-16", "08-19"))
