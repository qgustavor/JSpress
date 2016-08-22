var fs = require('fs');
var file = '//**FILE TO BE DECOMPRESSED**//'
var contents = fs.readFileSync(file).toString();
var text = contents.trim();
var wordInText = text.split(" ");
decompressionArray = [];

for (var i = 0; i < wordInText.length; i++) {
  percent = (i/wordInText.length) * 100;
  console.log(percent);
     if(wordInText[i][0] == "*"){
      var D = wordInText[i].slice(1);
      var ind = parseInt(D, 36);
      word = wordInText[ind];
      decompressionArray.push(word);
     } else {
      decompressionArray.push(wordInText[i]);
     }
}

fs.writeFile(file , decompressionArray.join(" "), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
