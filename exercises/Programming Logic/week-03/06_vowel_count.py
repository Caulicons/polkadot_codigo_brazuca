phrase = input("Enter a phrase to count the vowels : ")

count = 0
for char in phrase:
    if char in ["a", "e", "i", "o", "u"]:
        count += 1

print(f"The number of vowels is: {count}")
