class Node {
    constructor(data) {
        this.data = data;
        this.children = []
    }
    add(data) {
        const node = new Node(data)
        this.children.push(node)
    }
    remove(data) {
        this.children.filter((node) => {
            return node.data !== data
        })
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF() { // traverse breath first search
        let arr = [this.root];
        let finalArr = [];
        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            finalArr.push(node)
        }
        return finalArr;
    }
}

let t = new Tree();
t.root = new Node(1)
t.root.add(123)
t.root.add(456)
t.root.add(789)


console.log(t.traverseBF())
//console.log(JSON.stringify(t,0,2))
