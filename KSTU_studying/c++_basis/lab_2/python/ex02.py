arr = [-1, 3, -5, 6, -7, -8, 10, 10]

for i in range(len(arr) - 1):
    if(arr[i] > 0):
        if(arr[i + 1] > 0):
            print(arr[i], arr[i + 1])
            break
    if(arr[i] < 0):
        if(arr[i + 1] < 0):
            print(arr[i], arr[i + 1])
            break