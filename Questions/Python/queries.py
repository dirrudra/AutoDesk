list=["ls","cp","mv","!4","mv","!1","!6"]
ans=[0,0,0]
def check(str):
    num=str[1:]
    while(str!="cp" and str!="ls" and str!="mv"):
        str=list[int(str[1:])-1]
        if(str[1:]==num):
            return False
    return str
for i in list:
    if(i!="cp" and i!="ls" and i!="mv"):
        i=check(i)
        if(i==False):
            print("Loop Occurs")
    if i=="cp":
        ans[0]+=1
    elif i=="ls":
        ans[1]+=1
    elif i=="mv":
        ans[2]+=1
print(*ans)