// Code your solution here!
function reverseString(s){
    if(s.length >1){
        return s[s.length-1] + reverseString(s.substring(0, s.length-1))
    }else{
        return s
    }
}

console.log(reverseString("pizza"))

function isPalindrome(s){
    if(s.length<2){
        return true
    }else{
        if(s[0] === s[s.length-1]){
            return isPalindrome(s.substring(1, s.length-1))
        }else{
            return false
        }
    }
}

function addUpTo(a, i){
    if(i === 0){
        console.log(a[i])
        return parseInt(a[i])
    }else{
        return parseInt(a[0]) + addUpTo(a.splice(1), i-1)
    }
}

function maxOf(a){
    if(a.length === 2){
        return Math.max(a[0], a[1])
    }else{
        let max = Math.max(a[0], a[1])
        return maxOf([max, ...a.splice(2)])
    }
}

function includesNumber(a, e){
    if(a.length===1){
        if(a[0] === e){
            return true
        }else{
            return false
        }
    }
    let lastElement = a.pop()
    if(lastElement === e){
        return true
    }else{
        return includesNumber(a, e)
    }

}

console.log(isPalindrome('false'))
console.log(isPalindrome('yissiy'))
console.log(addUpTo([15,25,35,4,10], 2))
console.log(maxOf([1, 2, 3, 4, 5, 4, 2]))
console.log(includesNumber([1, 2, 3, 4, 5, 6], 6))
console.log(includesNumber([1, 2, 3, 4, 5, 6], 7))
console.log(includesNumber([1, 2, 3, 4, 5, 6], 3))