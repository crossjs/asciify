var BAKUP_FILE = false;

var av = process.argv;

if (av.length < 3)
    throw('need file!');

if (av[1] === av[2])
    throw('cannot asciify self!');

function enAsc (s, u) {
    var a = s.charCodeAt(0).toString(16),
        p;
    switch (a.length) {
        case 2:
        p = '00';
        break;
        case 3:
        p = '0';
        break;
        default:
        p = '';
    }
    return '\\' + u + p + a;
}

function asciify (f, d) {
    var
        // css file (end with '.css'), without 'u'
        u = /\.css$/.test(f) ? '' : 'u',

        d = d.replace(/[^\x00-\x7f]/g, function (s) {
            return enAsc(s, u);
        });
    fs.writeFile(f, d, function (err) {
        if (err) throw err;
        console.log('file asciified successfully');
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

            // do asciify
            asciify(av[2], data);
        });
    }
});
