// reverse string
function reverseString(str) {
    let reverse = ''
    for(var character of str) {
        reverse = character + reverse;  
    }
    return reverse;
}

console.log(reverseString("hello how are you"))


function reverse_reduce(str) {
    debugger;
    return str.split('').reduce((reversed,character)=> {
        return character + reversed;
    },'')
}

console.log(reverse_reduce('I am fine'))