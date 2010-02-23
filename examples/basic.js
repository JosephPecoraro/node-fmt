var fmt = require('../src/fmt');

// [Hello World                                        3.141593]
fmt.putsf('[%-50s %f]', 'Hello World', Math.PI);
