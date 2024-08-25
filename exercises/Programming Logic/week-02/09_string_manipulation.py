phrase = input("Enter a phrase to be analyzed: ")
letter = input("Enter a letter to be analyzed: ")

count = phrase.lower().count(letter.lower())

print(f"The letter '{letter}' appears {count} times in the phrase '{phrase}'.")
