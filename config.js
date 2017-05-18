var path = require('path');

const base = './';

const urls = {
    css: path.resolve(base, 'assets/css'),
    fonts: path.resolve(base, 'assets/fonts'),
    images: path.resolve(base, 'assets/images'),
    icons: path.resolve(base, 'assets/icons'),
    js: path.resolve(base, 'assets/js'),
    build: path.resolve(base, 'build')
}

module.exports = urls;