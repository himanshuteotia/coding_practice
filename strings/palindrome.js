function palindrome(str) {
    if(str.split('').reverse().join('') === str) {
        return true
    }
    return false;
}

function palindromeWithEvery(str) {
    return str.split('').every((char,i) => {
        return char === str[str.length - i -1]
    })

}


console.log(palindromeWithEvery("nitin"))
console.log(palindromeWithEvery("rahul"))
