let tree = {
    "data": 1,
    "children": [{
        "data": 123,
        "children": [{
            "data": 1234,
            "children": []
        }, {
            "data": 1235,
            "children": []
        }, {
            "data": 1236,
            "children": []
        }]
    }, {
        "data": 456,
        "children": [{
            "data": 4561,
            "children": [{
                "data": 4562,
                "children": [{
                    "data": 4563,
                    "children": []
                }]
            }]
        }]
    }, {
        "data": 789,
        "children": []
    }]
}


function levelWidth(tree) {
    let arr = [tree,'s'];
    let counterArray = [0];
    while (arr.length > 1) {
        let node = arr.shift()
        if(node == 's') {
            arr.push('s')
            counterArray.push(0)
        } else {
            arr.push(...node.children);
            counterArray[counterArray.length-1]++
        } 
    }
    return counterArray;
}

console.log(JSON.stringify(levelWidth(tree)));

