def simple_calculator():
    n1 = int(input("Enter the first number: "))
    n2 = int(input("Enter the second number: "))
    operator = input("Operator : ")

    if operator == "+":
        print(f"The sum of {n1} and {n2} is: {n1 + n2}")
    elif operator == "-":
        print(f"The difference of {n1} and {n2} is: {n1 - n2}")
    elif operator == "*":
        print(f"The multiplication of {n1} and {n2} is: {n1}")
    elif operator == "/":
        print(f"The division of {n1} and {n2} is: {n1 / n2}")


simple_calculator()
