# JSpress
Small text compressor for repetitive strings! 

## Command line interface:
```bash
node index.js [--decompress] [input] [output]
```

If output is not specified it will printed to stdout.
  
## Programmatic interface:

```javascript
var compress = require('.\compress.js');
var decompress = require('.\decompress.js');
    
var compressedString = compress('input string')
var decompressedString = decompress('compressed string')
```
    
## How it works:

It's a simple dictionary based compressor for plain texts. It
works spliting input on space (' ') and replacing repetitions
with tokens encoded in base 36.
