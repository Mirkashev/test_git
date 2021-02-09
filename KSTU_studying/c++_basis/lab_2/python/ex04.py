arr = [-10, -21, 5, -3, 10]

summ = 0
count_s = 0

for i in range(len(arr)):
    if arr[i] < 0:
        summ = arr[i] + summ
        count_s += 1

print(summ / count_s)