arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))
target = int(input())


def checkRemain(arr2, remain):
    total = 0
    for i in range(len(arr2)):
        for j in range(i, len(arr2)):
            total += arr2[j]
            if total > remain:
                total = 0
                break
            elif total == remain:
                return True
    return False

def countPairs(arr1, arr2, target):
    total = 0
    count = 0
    for i in range(len(arr1)):
        for j in range(i, len(arr1)):
            total += arr1[j]
            if total > target:
                total = 0
                break
            remain = target - total
            if checkRemain(arr2, remain):
                count += 1
    return count

print(countPairs(arr1, arr2, target))