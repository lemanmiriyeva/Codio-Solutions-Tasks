var s;
s=1456541
function checkIsPalindrome(str){
    str=String(s).toLowerCase()
    var r = "";
    for(var i = str.length - 1; i >= 0; i--){
      r += str[i];
    }
    if(str===r){
        return "is Palindrome"
    }
    
    return "is not Palindrome";
  }
document.getElementById('demo').innerHTML=checkIsPalindrome(s)
