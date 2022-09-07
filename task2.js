var findCommonPrefix = function(array) {
    let prefix = ""
    if(array === null || array.length === 0) return prefix

    for (let i=0; i < array[0].length; i++){ 
        const letter = array[0][i] 

        for (let j = 1; j < array.length; j++){ 
            if(array[j][i] !== letter) return prefix
        }
        prefix = prefix + letter
    }

    return prefix
}

document.getElementById('demo').innerHTML=findCommonPrefix(["apple","application","app"])
