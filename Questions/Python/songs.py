songs = list(map(str, input().split()))
animations = list(map(str, input().split()))

hashsongs = {}
hashanimations = {}

for i in songs:
    index = i.index(':')
    hashsongs[i[:index]] = int(i[index+1:])

for i in animations:
    index = i.index(':')
    hashanimations[int(i[index+1:])] = i[:index]


res = []

for i in hashsongs.keys():
    val = hashsongs[i]
    for j in sorted(hashanimations.keys()):
        if val%j == 0:
            s = hashanimations[j] + ":" + str(val//j)
            res.append(s)
            break

print(res)


