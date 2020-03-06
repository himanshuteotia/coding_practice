// sorted array
function commonElements(kArray) {
    let hashmap = {}, answers = [], last;
    for (let i = 0; i < kArray.length; i++) {
        last = null;
        for (let k = 0; k < kArray[i].length; k++) {
            if (last != kArray[i][k]) {
                if(!hashmap[kArray[i][k]]) {
                    hashmap[kArray[i][k]] = 1;
                } else {
                   hashmap[kArray[i][k]]++;
                }
            } else {
                last = kArray[i][k];
            }
        }
    }
    console.log(hashmap);
    for (let key in hashmap) {
        if (hashmap[key] === kArray.length) {
            answers.push(key)
        }
    }
    return answers;
}

console.log(commonElements([[1, 2, 3, 3,4], [3, 4, 5], [ 4, 6, 7, 5]]))
