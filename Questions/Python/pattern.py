n = int(input())

for i in range(n):
    if i == 0 or i == n-1:
        print('*' * n)
    else:
        print('*', end=" ")
        for i in range(n-3):
            print(" ", end= "")
        print('*')
