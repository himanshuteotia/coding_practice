class Node {
    constructor(data,next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    setHead(data) {
        this.head = new Node(data);
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        } 
        return counter;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    clear() {
        this.head = null;
    }
}

const newLinkedList = new LinkedList()
newLinkedList.setHead(1234)
newLinkedList.insertFirst(2345)
newLinkedList.insertFirst(3456)
console.log("first node : ",newLinkedList.getFirst())
console.log("last node : ",newLinkedList.getLast())

