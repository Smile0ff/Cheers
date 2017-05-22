var path = require('path'),
    cfg = require('../config');

const aliasNames = {
    '@config': 'config',
    '@pages': 'pages',
    '@components': 'components',
    '@utility': 'utility'
}

const aliases = {};

Object.keys(aliasNames).map((key) => {

    aliases[key] = path.join(cfg.js, aliasNames[key]);
});

module.exports = aliases;