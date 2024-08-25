numbers = []
for i in range(3):
    n = int(input("Enter a number: "))
    numbers.append(n)

numbers.sort()
for n in numbers:
    print(n, end=" ")
