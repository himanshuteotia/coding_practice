const node1 = {
    data : 1234
}
const node2 = {
    data : 4567
}

const node3 = {
    data : 7890
}
// join the nodes

node1['next'] = node2;
node2['next'] = node3;

console.log(node1)
console.log(node2)
