n = int(input("Enter a number: "))

sum = 1
for i in range(1, n + 1):
    sum *= i

print(f"The factorial of {n} is: {sum}")
