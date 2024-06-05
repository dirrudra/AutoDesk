arr = list(map(int, input().split()))

def count(arr, i):
    c = 0
    for j in arr:
        if j > i:
            c += 1
    return c

def distribute(arr):
    a, b = [], []
    a.append(arr[0])
    b.append(arr[1])
    for i in range(2, len(arr)):
        if count(a, arr[i]) > count(b, arr[i]):
            a.append(arr[i])
        elif count(a, arr[i]) < count(b, arr[i]):
            b.append()
        else:
            if len(a) > len(b):
                a.append(arr[i])
            elif len(a) < len(b):
                b.append(arr[i])
            else:
                a.append(arr[i])
    a += b
    return ' '.join(map(str, a))

print(distribute(arr))

