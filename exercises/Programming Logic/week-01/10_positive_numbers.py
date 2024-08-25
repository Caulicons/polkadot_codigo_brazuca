def positive_number():
    sum = 0
    for i in range(5):
        num = int(input("Enter a number: "))
        if num > 0:
            sum += 1

    print("Number of positive numbers entered:", sum)


positive_number()
