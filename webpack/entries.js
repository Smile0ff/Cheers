var path = require('path'),
    cfg = require('../config');

const pages = {
    home: 'home.js',
    cases: 'cases.js'
}

const entries = {};

Object.keys(pages).map((page) => {

    entries[page] = path.join(cfg.js, 'pages', pages[page]);
});

module.exports = entries;