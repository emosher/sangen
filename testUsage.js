var Sangen = require('./sangen'),
    fs = require('fs');

var SangenMp3 = new Sangen('mp3');

// We want to convert all files in `testMusic/wma/` into mp3.  After conversion,
// they should be placed in `testMusic/mp3/`.
fs.readdir('./testMusic/wma/', function (err, files) { 
    if (err) throw err;
    files.forEach(function (file) {
        SangenMp3.convert('testMusic/wma/' + file, 'testMusic/mp3/' + file.replace(/(?:\.([^.]+))?$/, '.mp3'));
    });
});