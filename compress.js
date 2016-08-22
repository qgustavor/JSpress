function compress(contents) {
	var text = contents.trim();
	var wordInText = text.split(" ");
	var compressionArray = [];
	var originalLength = text.length;
	
	for (var i = 0; i < wordInText.length; i++){
		if(compressionArray.indexOf(wordInText[i]) < 0){
			compressionArray.push(wordInText[i]);
		} else {
			compressionArray.push("*" + wordInText.indexOf(wordInText[i]).toString(36));
		}
	}
	
	return compressionArray.join(" ");
}

module.exports = compress;
