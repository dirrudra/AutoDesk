l1=list(map(int,input().split()))
c=0
for i in range(len(l1)):
    for j in range(i+1,len(l1)):
        s=str(l1[i])+str(l1[i])
        if str(l1[j]) in s:
            c+=1
print(c)