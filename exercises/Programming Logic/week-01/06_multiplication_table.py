def multiplication_table():
    number = input("Enter a number to see the multiplication table: ")

    for i in range(10):
        print(f"{number} x {i+1} = {int(number) * (i+1)}")


multiplication_table(21)
