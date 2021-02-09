def plus(num1, num2):
    num1 += num2
    return num1

def minus(num1, num2):
    num1 -= num2
    return num1

def mult(num1, num2):
    num1 *= num2
    return num1

def div(num1, num2):
    num1 /= num2
    return num1

switcher = {
    "+": plus,
    "-": minus,
    "*": mult,
    "/": div
}

def op_switch(operation):
    return switcher.get(operation)

a = float(input())
operation = str(input())
b = float(input())
result = op_switch(operation)(a, b)

while(operation != "="):
    operation = str(input())
    if(operation == "="):
        print(result)
        break
    b = float(input())
    result = op_switch(operation)(result, b)