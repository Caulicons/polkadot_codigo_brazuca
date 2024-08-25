sum = 0
count = 0
while True:
    n = int(input("Enter a grade: "))
    if n < 0:
        break

    sum += n
    count += 1

average = sum / count
print("The average of the grades is:", average)
