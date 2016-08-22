function decompress(contents) {
  var text = contents.trim();
  var wordInText = text.split(" ");
  var decompressionArray = [];
  
  for (var i = 0; i < wordInText.length; i++) {
    percent = (i / wordInText.length) * 100;
      if(wordInText[i][0] == "*"){
      var D = wordInText[i].slice(1);
      var ind = parseInt(D, 36);
      var word = wordInText[ind];
      decompressionArray.push(word);
    } else {
      decompressionArray.push(wordInText[i]);
    }
  }
  
  return decompressionArray.join(" ");
}

module.exports = decompress;
