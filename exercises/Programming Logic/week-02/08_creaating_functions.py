def even_or_odd(n):
    return "even" if n % 2 == 0 else "odd"


n = int(input("Enter a number: "))

print(f"The number {n} is {even_or_odd(n)}")
