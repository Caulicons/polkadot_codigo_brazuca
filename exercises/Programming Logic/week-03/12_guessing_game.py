import random


def guessing_game():
    number = random.randint(0, 100)
    guess = -1
    attempts = 0
    while guess != number:
        guess = int(input("Guessing the number : "))
        if guess > number:
            print("Too high! Try again.")
        else:
            print("Too low! Try again.")
        attempts += 1

    print(f"The correct number is {number}. You took {attempts} attempts.")


guessing_game()
