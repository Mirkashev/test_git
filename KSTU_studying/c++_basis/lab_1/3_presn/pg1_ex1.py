ls = []
num_max = 0

for i in range(3):
    ls.append(int(input()))

for i in range(len(ls)) :
    if ls[i] > num_max :
        num_max = ls[i]
print(num_max)
