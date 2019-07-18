
import semtex from '@semtexjs/core';
import pkg from '../package.json';

const cli = {
  version: pkg.version,
};


console.log(`Semtex: Command-line v${cli.version}`);
console.log(`Semtex: Core v${semtex.version}`);
