sum = n = 0

while True:
    sum += n
    n = int(input("Enter a number (0 to exit): "))
    if n == 0:
        break

print(f"The sum of the numbers entered was {sum}")
