var s;
s=525

function ToLower(str) {
  var letterDict = { A: 'a', B: 'b', C: 'c', D: 'd', E: 'e', F: 'f', G: 'g', H: 'h', I: 'i', J: 'j', K: 'k', L: 'l', M: 'm', N: 'n', O: 'o', P: 'p', Q: 'q', R: 'r', S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x', Y: 'y', Z: 'z' }

  var result = ''
  for (var i = 0; i < str.length; i++)
    result += letterDict[str[i]] || str[i]

  return result
}

function checkIsPalindrome(str){
    str=String(ToLower(str))
    var str2 = "";
    for(var i = str.length - 1; i >= 0; i--){
      str2 += str[i];
    }
    if(str===str2){
        return "is Palindrome"
    }
    
    return "is not Palindrome";
  }
document.getElementById('demo').innerHTML=checkIsPalindrome(s)
