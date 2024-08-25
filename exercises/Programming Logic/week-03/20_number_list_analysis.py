numbers = []

while True:
    r = input("Your want add a new number (y/n): ")
    if r in ("n" "not"):
        break

    numbers.append(int(input("Enter a number: ")))

if len(numbers) == 0:
    print("No numbers entered.")
else:
    smaller = min(numbers)
    larger = max(numbers)
    sum = 0
    for n in numbers:
        sum += n

    average = sum / len(numbers)

    print(f"The smallest number is {smaller}")
    print(f"The largest number is {larger}")
    print(f"The average of the numbers is {average}")
    print(f"The sum of the numbers is {sum}")
