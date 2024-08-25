n = int(input("Enter one natural number: "))

while n < 0:
    print("Error: Please enter a natural number.")
    n = int(input("Enter one natural number: "))


sum = 0
for i in range(n):
    sum += i

print(f"The sum of the first {n} natural numbers is: {sum}")
