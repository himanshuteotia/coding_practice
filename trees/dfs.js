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


function depthFirstTraverseTree(tree) {
    let arr = [tree];
    let finalArray = [];
    while(arr.length) {
        let node = arr.shift(); // shift to remove first element
        arr.push(...node.children) // push the lements at last
        finalArray.push(node.data)
    }
    return finalArray;
}

console.log(JSON.stringify(depthFirstTraverseTree(tree),0,2));