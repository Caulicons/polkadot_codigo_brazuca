start = int(input("Beginning of the interval: "))
end = int(input("End of the interval: "))

def is_prime(x):
  if x < 2:
    return False
  for i in range(2, int(x**0.5) + 1):
    if x % i == 0:
      return False
  return True

def get_digit_sum(x):
  sum = 0
  while x > 0:
    sum += x % 10
    x //= 10
  return sum

def check_magic_number(x):
  is_divided_by_4 = x % 4 == 0
  is_primer = is_prime(x)
  digit_sum_is_odd = get_digit_sum(x) % 2 != 0

  return is_divided_by_4 and is_primer and digit_sum_is_odd

for num in range(start, end + 1):
  if check_magic_number(num):
    print(f"{num} is the Magic Number...")

print("Magic numbers was not found in the interval", end=" ")