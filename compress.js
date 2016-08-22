var fs = require('fs');
var file = '//**FILE TO BE COMPRESSED**//'
var contents = fs.readFileSync(file).toString();
var text = contents.trim();
var wordInText = text.split(" ");
var compressionArray = [];
var originalLength = text.length;


for (var i = 0; i < wordInText.length; i++){
	percent = (i/wordInText.length) * 100;
	console.log(percent);
     if(compressionArray.indexOf(wordInText[i]) < 0){
     	compressionArray.push(wordInText[i]);
     } else {
     	compressionArray.push("*" + wordInText.indexOf(wordInText[i]).toString(36));
     }
}

console.log("ratio: " + originalLength / compressionArray.join().length)

fs.writeFile(file + ".FWAD", compressionArray.join(" "), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
