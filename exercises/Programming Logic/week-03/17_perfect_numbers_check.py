n = int(input("Enter a number to check if is a perfect number: "))
sum = 0
for i in range(1, n):
    if n % i == 0:
        sum += i

if sum == n:
    print(f"The number {n} is a perfect number")
else:
    print(f"The number {n} is not a perfect number")
