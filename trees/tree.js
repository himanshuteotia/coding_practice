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

    }
}