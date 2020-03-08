let tree = {
    "data" : 1,
    "children" : [{
        "data":  123,
        "children" :[{
            "data":  1234,
            "children" :[]
        },{
            "data":  1235,
            "children" :[]
        },{
            "data":  1236,
            "children" :[]
        }]
    },{
        "data":  456,
        "children" :[{
            "data":  4561,
            "children" :[{
                "data":  4562,
                "children" :[{
                    "data":  4563,
                    "children" :[]
                }]
            }]
        }]
    },{
        "data":  789,
        "children" :[]
    }]
}


function breathFirstSearch(tree) {
    let arr = [tree];
    let treverseArray = [];
    while(arr.length) {
        let node = arr.shift(); // shift to remove first element
        arr.unshift(...node.children); // unsift to add multiple elements at starting
        treverseArray.push(node.data)
    }
    return treverseArray;
}

console.log(JSON.stringify(breathFirstSearch(tree),0,2))