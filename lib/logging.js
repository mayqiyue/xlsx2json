

const config = require('../config.json');

var enable = config.log;

function log(...args) {
    if (enable) {
        console.log(...args);
    }
}


module.exports = {
    log
}