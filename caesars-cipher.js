function rot13(str){
  var offset = 13;
  var az = "AZ";
  var strRetunr = str.reduce(function(prev, curr, index, array){
    var toAppend = curr;
    var currCode = curr.charCodeAt(0);
    if(curr !== " " && currCode >= az.charCodeAt(0) && currCode <= az.charCodeAt(1)){
      toAppend = currCode - offset >= az.charCodeAt(0) ? currCode - offset : currCode + offset;
    }
    return prev + toAppend;
  }, "");
}

////////////////////////////////////////////////////////////////////////////////

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
        code = code - offset >= initRange
          ? code - offset
          : code + offset;
        char = String.fromCharCode(code);
      }
    }
    strRetunr += char;
  }
  return strRetunr;
}
// Change the inputs below to test
// rot13("SERR PBQR PNZC");
