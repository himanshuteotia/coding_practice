function medianOfArray(arr) {
    let length = arr.length;
    // odd
    if(length%2 == 1) {
        return arr[Math.floor(length/2)]
    } else {
    // even
        return (arr[length/2] + arr[length/2 - 1])/2;
    }
}

console.log(medianOfArray([1,2,3,4]))
console.log(medianOfArray([1,2,3,4,5]))