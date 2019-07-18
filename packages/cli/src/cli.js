
import core from '@semtexjs/core';
import html from '@semtexjs/html';

import { name, version } from '../package.json';

export default {
  name,
  version,
};

console.log(`${name} = v${version}`);
console.log(`${core.name} = v${core.version}`);
console.log(`${html.name} = v${html.version}`);
