def average():
    i = 0
    total = 0
    keep = "y"
    while keep:
        num = int(input("Add Number : "))
        total += num
        i += 1
        keep = booleanRequest()

    return total / (1 if total == 0 else i)


def booleanRequest():
    r = input("Want to continue ? (y/n): ")

    while r not in ["y", "n"]:
        r = input("Want to continue ? (y/n): ")

    return True if r == "y" else False


print("Average :", average())
