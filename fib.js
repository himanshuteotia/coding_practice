console.time('start')
function fibnocci(n) {
    if(n < 2) {
        return n;
    }
    return fibnocci(n-1) + fibnocci(n-2) 
}
console.log(fibnocci(9))
console.time('end')
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]){
            return cache[args]
        }
        const result = fn.apply(this,args)
        cache[args] = result;
        return result;
    }
}

const fib = memoize(fibnocci)
console.log(fib(9))