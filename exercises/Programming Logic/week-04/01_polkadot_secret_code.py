start = int(input("Enter the starting number of range: "))
end = int(input("Enter the end number of range: "))

sum = 0
for num in range(start, end + 1):
    if num % 5 == 0 and num % 3 ==0: 
        continue
    elif num % 3 ==0 :
        sum += num
    elif num % 5 ==0 :
        sum -= num


print("The total calculated value is ", sum)