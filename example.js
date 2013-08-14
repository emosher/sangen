var Sangen = require('./sangen'),
    fs = require('fs');

var sangen = new Sangen('wav');

// We want to convert all files in `testMusic/wma/` into wav.  After conversion,
// they should be placed in `testMusic/wav/`.
fs.mkdirSync('./testMusic/wav/');
fs.readdir('./testMusic/wma/', function (err, files) { 
    if (err) throw err;
    files.forEach(function (file) {
        sangen.convert('testMusic/wma/' + file, 'testMusic/wav/' + file.replace(/(?:\.([^.]+))?$/, '.wav'));
    });
});