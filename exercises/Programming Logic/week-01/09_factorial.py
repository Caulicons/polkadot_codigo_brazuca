def factorial():
    num = int(input("Enter a number: "))
    result = 1
    for i in range(1, num + 1):
        result *= i
    print(f"The {num} factor is {result}")


factorial()
