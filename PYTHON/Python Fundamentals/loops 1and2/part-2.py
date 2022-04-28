def biggie_size(arr):
    for x in range(0,len(arr),1):
        if arr[x]>0:
            arr[x]="big"
    return arr


print(biggie_size([1,4,-5,6]))


##############################################


def count_positives(arr):
    count=0
    for i in arr:
        if i>0:
            count+=1
    arr[len(arr)-1]=count
    return arr

print(count_positives([1,6,3,-4,-2,-7,-8]))


###############################################


def sum_total(arr):
    sum=0
    for i in range(0,len(arr),1):
        sum=sum+arr[i]
    return sum
print(sum_total([1,2,3,4]))


###############################################


def average(arr):
    sum=0
    for i in range(0,len(arr),1):
        sum=sum+arr[i]
        return sum/len(arr)
print(average([2,2]))


###############################################


def length(arr):
    for x in arr:
        x=len(arr)
        return x
print(length([37,2,1,-9,5,4]))

#############################################


def minimum(arr):
    min=arr[0]
    if len(arr)==0:
        return "flase"  
    elif len(arr)>0:
        for i in range(0,len(arr),1):
            if arr[i]<min:
                min=arr[i]
        return min
print(minimum([2,-4,5,-17,6]))

#############################################


def maximum(arr):
    max=arr[0]
    if len(arr)==0:
        return "flase"  
    elif len(arr)>0:
        for i in range(0,len(arr),1):
            if arr[i]>max:
                max=arr[i]
        return max
print(maximum([2,-4,5,-17,6]))

#############################################


def ultimate_analysis(arr):
    sum=0
    min=0
    max=0
    for x in range(0,len(arr),1):
        sum=sum+arr[x]
        if arr[x]<min:
            min=arr[x]
        
        if arr[x]>max:
            max=arr[x]

    return[sum,sum/len(arr),max,min,len(arr)]

print(ultimate_analysis([37,2,1,-9]))


##############################################
#works if the array isn't empty

ls = [2,1,3,5,4]

def rev(arr):
    if arr: # list is not empty
        return rev(arr[1:])+[arr[0]]
    else: # list is empty
        return []
print(rev(ls))
