var fs = require('fs');
var compress = require('./compress.js');
var decompress = require('./decompress.js');

// consider replacing it with some npm library
var argv = process.argv.slice(2);
var path = argv.filter(function (e) {
  return e.charAt(0) !== '-';
});
var hasDecompressArg = argv.indexOf('--decompress') !== -1;

if (path.length === 0) {
  console.log('Usage: node index.js [--decompress] [input] [output]');
  console.log('If output is not specified it will printed to stdout');
} else {
  fs.readFile(path[0], 'utf-8', function (err, file) {
    if (err) throw err;
    var result;
    if (hasDecompressArg) {
      result = decompress(file);
    } else {
      result = compress(file);
    }
    if (path[1]) {
      fs.writeFile(path[1], result, function (err) {
        if (err) throw err;
        console.log("The file was saved!");
      })
    } else {
      console.log(result);
    }
  });
}
