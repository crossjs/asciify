var BAKUP_FILE = false;

var av = process.argv;

if (av.length < 3)
    throw('need file!');

if (av[1] === av[2])
    throw('cannot asciify self!');

function deasciify (f, d) {
    var
        // css file (end with '.css'), without 'u'
        r = /\.css$/i.test(f) ? /\\([0-9a-f]{4})/ig : /\\u([0-9a-f]{4})/ig,

        d = d.replace(r, function (a, s) {
            return String.fromCharCode('0x' + s);
        });
    fs.writeFile(f, d, function (err) {
        if (err) throw err;
        console.log('file deasciified successfully');
    });
}

function backupFile (f) {
    fs.rename(f, f + '.bak', function (err) {
        if (err) throw err;
        console.log('backup file created: ' + f + '.bak');
    });
}

var fs = require('fs');

fs.stat(av[2], function (err, stats) {
    if (err) throw err;

    // if the file is a file
    if (stats.isFile()) {

        // read the file
        fs.readFile(av[2], {
                    encoding: 'utf8',
                    flag: 'r'
                }, function (err, data) {
            if (err) throw err;

            // backup the file
            if (BAKUP_FILE)
                backupFile(av[2]);

            // do deasciify
            deasciify(av[2], data);
        });
    }
});
