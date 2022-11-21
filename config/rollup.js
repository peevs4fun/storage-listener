var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/i33558493/storage-listener)
 * API https://github.com/i33558493/storage-listener/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} i33558493. All Rights Reserved
 * Licensed under MIT (https://github.com/i33558493/storage-listener/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'storage-listener';
exports.banner = banner;
exports.getCompiler = getCompiler;
