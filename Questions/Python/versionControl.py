logs = list(map(str, input().split(',')))

hashmap = {}

currbranch = ""

for i in logs:
    index = i.index(" ")
    cmd = i[:index].strip()
    val = i[index+1:].strip()

    if cmd == "switch":
        if val not in hashmap:
            hashmap[val] = []
        curr = val
    elif cmd == "push":
        if val not in hashmap[curr]:
            hashmap[curr].append(val)

maxi = 0
res = ""
for i in hashmap.keys():
    l = len(hashmap[i])
    if l > maxi:
        maxi = l
        res = i

print(res)
