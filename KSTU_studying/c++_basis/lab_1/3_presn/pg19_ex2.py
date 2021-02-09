num = int(input())
delitel = 2
a = 0
while(a != 1) :
    if num % delitel == 0:
        a = 1
        print(delitel)
    delitel = delitel + 1

