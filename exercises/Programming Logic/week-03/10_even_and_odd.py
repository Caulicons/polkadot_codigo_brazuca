def even_or_odd(n):
    return "even" if n % 2 == 0 else "odd"


n = int(input("Number: "))
print(f"The Number {n} is {even_or_odd(n)}")
