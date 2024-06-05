arr = list(map(int, input().split()))
k = int(input())

def countDuplicates(arr, k):
    res = 0
    for i in range(0, len(arr)):
        hashmap = {}
        count = 0 
        for j in range(i, len(arr)):
            if arr[j] not in hashmap:
                hashmap[arr[j]] = 1
            else:
                hashmap[arr[j]] += 1

            count += hashmap[arr[j]]//2

            if count >= k:
                res += 1
        
    return res

print(countDuplicates(arr, k))
        
        