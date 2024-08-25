def countdown():
    number = int(input("Enter a number to countdown: "))

    while number > 0:
        print(number)
        number = number - 1

    print("Countdown completed successfully")


countdown()
