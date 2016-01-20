function rot13(str) { // LBH QVQ VG!
  var offset = 13;
  var rangeLetters = "AZ";
  var initRange = rangeLetters.charCodeAt(0);
  var endRange = rangeLetters.charCodeAt(1);
  var strRetunr = "";
  for(var i = 0; i < str.length; i++){
    var char = str[i];
    if(char !== " "){
      var code = str.charCodeAt(i);
      if(code >= initRange && code <= endRange){
        code = code - 13 >= initRange
          ? code - 13
          : code + 13;
        char = String.fromCharCode(code);
      }
    }
    strRetunr += char;
  }
  return strRetunr;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
