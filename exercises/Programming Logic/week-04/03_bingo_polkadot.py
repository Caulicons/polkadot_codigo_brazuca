import random
import time

def generate_card() -> list:
  n = list(range(1, 76))
  
  card = []
  for _ in range(5):
    random_number = random.choice(n)
    n.remove(random_number)  
    card.append(random_number)

  return card  

def bingo():
   # Initialize the counter for bingo draws  and the list of numbers remaining in the card.  The card will be generated randomly.  The drawn numbers will be removed from the card and the remaining numbers will be displayed.  The game continues until all numbers in the card have been drawn.  The game ends when all numbers in the card have been drawn.  The game counts the number of draws and displays the total.  The game also keeps track of the number of bingo
  bingo_count = 0
  n = list(range(1, 76))

  print("Welcome to our Bingo game")
  # Generate a random card
  my_card = generate_card()
  print(f"You card is : {my_card}")


  print("We will start in 3 seconds...")
  time.sleep(3)

  while len(my_card) > 0:
    bingo_count += 1
    drawer_number = random.choice(n)
    n.remove(drawer_number)
    print(f"Drawn number is : {drawer_number}")

    if drawer_number in my_card:
      my_card.remove(drawer_number)
      if(len(my_card) == 0):
        break
      print(f"You got it! You remained numbers is : {my_card}")

  print(f"Congratulations you complete your card in {bingo_count} draws.")

bingo()