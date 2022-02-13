function reverse(arr) {
    var newArr = [];
    for(var i = 0;i<arr.length;i++){
        console.log("*");
        newArr[i]=arr[arr.length-1-i]
    }
    return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);