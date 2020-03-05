function sentenceCapatalization(str) {
    return  str.split(' ').reduce((newStr,words)=>{
        return newStr + " " + words[0].toUpperCase() + words.slice(1)
    },'').trim()
}

console.log(sentenceCapatalization("hello, How are you himanshu k"))