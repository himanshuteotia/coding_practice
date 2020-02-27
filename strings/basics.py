def reverse_string(str):
    reverse = ''
    for char in str:
        reverse = char + reverse
    return reverse

print(reverse_string('Hello, How are you'))