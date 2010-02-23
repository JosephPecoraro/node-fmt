var fmt = require('../src/fmt');
var sys = fmt.convert(require('sys'), ['puts', 'print']);

// [      ---><---       ]
var str = '---';
sys.puts('[%+10s><%-10s]', str, str);

// [look at that!!!]
printWithBrackets = fmt.convert(function(s) {
    sys.puts('['+s+']');
});
printWithBrackets('%s!!!', 'look at that');
