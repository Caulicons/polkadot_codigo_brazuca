def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False

    return True


number_range = int(input("Enter a range of numbers: "))

for num in range(number_range):
    if is_prime(num):
        print(f"{num} is prime")
