var webpack             = require('webpack');
var production          = process.env.NODE_ENV === 'production';
var path                = require('path');


module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        filename: 'moment-shortcuts.js',
        library: 'momentShortcuts',
        libraryTarget: 'umd'
    },

    devtool: 'source-map'
};