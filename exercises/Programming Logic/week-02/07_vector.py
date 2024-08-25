shopping_list = []

while True:
    print("This is your shopping list\n ")
    print("===============================")
    print("1. Add item")
    print("2. View list")
    print("0. Quit")
    choice = int(input("Choice a option : "))

    if choice == 0:
        print("Exiting...")

    elif choice == 1:
        new_item = input("New Item : ")
        shopping_list.append(new_item)
    elif choice == 2:
        for product in shopping_list:
            print(f"{product}")
