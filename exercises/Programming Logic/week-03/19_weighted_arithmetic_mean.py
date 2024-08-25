grades = []
w = [2, 3, 5]

for i in range(3):
    num = int(input(f"Enter a grade {i+1} weight {w[i]}: "))
    grades.append(num)

notes = grades[0] * w[0] + grades[1] * w[1] + grades[2] * w[2] / w[0] + w[1] + w[2]

print(f"Your weighted average grade is: {notes}")
