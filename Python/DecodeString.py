class Solution:
    def decodeString(self, s: str) -> str:
        stack: list[tuple[str, int]] = []

        current_string = ""
        current_number = 0

        for char in s:

            if char.isdigit():
                current_number = current_number * 10 + int(char)

            elif char == "[":
                stack.append((current_string, current_number))
                current_string = ""
                current_number = 0

            elif char == "]":
                previous_string, k = stack.pop()
                current_string = previous_string + current_string * k
            else:
                current_string += char
        return current_string
