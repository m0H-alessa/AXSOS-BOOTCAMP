#1 Countdown
def count(num):
    arr=[]
    for x in range(num,0,-1):
        arr.append(x)
    return arr
print(count(5))


# ################################################
#2 Print and Return 
def funn (a,b):
        print(a)
        return b
x=funn(1,2)
print(x)       


#############################################
#3 firstpluslength
def first_plus_length(arr):
    return(len(arr)+arr[0])


[1,4,5,6,7]

print(first_plus_length([1,4,5,6,7]))


######################################################
#4 values greater than second
def values_greater_than_second(arr):
    newarr=[]
    count=0
    for x in range (0,len(arr),1):
        if len(arr)<2:
            return "false"

        elif arr[x]>arr[1]:
            newarr.append(arr[x])
            count=count+1
    print(count) 
    return newarr

print(values_greater_than_second([4,4,2,6,5]))



####################################################
#5 length and value
def length_and_value(size,value):
    newarr=[]
    for x in range (0,size,1):
        newarr.append(value)
    return newarr
print(length_and_value(5,3))