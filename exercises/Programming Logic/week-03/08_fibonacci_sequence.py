def fibonacci_sequence():

    n = int(input("Until where you want go to fibonacci sequence: "))

    a, b = 0, 1
    for _ in range(n):
        print(b, end=" ")
        a, b = b, a + b


fibonacci_sequence()
