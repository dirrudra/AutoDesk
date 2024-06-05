arr = list(map(str, input().split()))

command_counts = {}
result = [0, 0, 0]
for i in arr:
    if i == "cp":
        command_counts["cp"] = command_counts.get("cp", 0) + 1
        result[0] += 1
    elif i == "mv":
        command_counts["mv"] = command_counts.get("mv", 0) + 1
        result[1] += 1
    elif i == "ls":
        command_counts["ls"] = command_counts.get("ls", 0) + 1
        result[2] += 1
    else:
        index = int(i[1])
        while True:
            if arr[index] == "c":
                command_counts["cp"] = command_counts.get("cp", 0) + 1
                result[0] += 1
                break
            elif arr[index] == "m":
                command_counts["mv"] = command_counts.get("mv", 0) + 1
                result[1] += 1
                break
            elif arr[index] == "l":
                command_counts["ls"] = command_counts.get("ls", 0) + 1
                result[2] += 1
                break
            else:
                index = int(arr[index][1])

print(command_counts)
print(result)


# arr = list(map(str,input().split()))

# map = {}
# res = [0,0,0]
# for i in arr:
#     if i == "cp":
#         map["cp"] = map.get("cp", 0) + 1
#         res[0] +=1
#     elif i == "mv":
#         map["mv"] = map.get("mv", 0) + 1
#         res[1] +=1
#     elif i == "ls":
#         map["ls"] = map.get("ls", 0) + 1
#         res[2] +=1
#     else:
#         index = i[1]
#         looper = True
#         while looper:
#             if arr[index] == "c":
#                 map["cp"] = map.get("cp", 0) + 1
#                 res[0] +=1
#                 looper = False
#                 break
#             elif arr[index] == "m":
#                 map["mv"] = map.get("mv", 0) + 1
#                 res[1] +=1
#                 looper = False
#                 break
#             elif arr[index] == "l":
#                 map["ls"] = map.get("ls", 0) + 1
#                 res[2] +=1
#                 looper = False
#                 break
#             else:
#                 index = arr[index]
#                 index = index [1]
#                 looper = True
# print(map)
# print(res)
# #