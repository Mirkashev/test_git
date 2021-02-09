arr = [99, 32, 42, 255, 32, 32 ,55, 66, 21 ,23]

for i in range(len(arr)):
    if i < 5:
        for k in range(int(len(arr) / 2)):
            if arr[i] < arr[k]:
                arr[i], arr[k] = arr[k], arr[i]
    else:
        for k in range(int(len(arr) / 2), len(arr)):
            if arr[i] > arr[k]:
                arr[i], arr[k] = arr[k], arr[i]

for i in range(len(arr)):
    if i < len(arr) - 1:
        print(arr[i], end=",")
    else:
        print(arr[i], end="")