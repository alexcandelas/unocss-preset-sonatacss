import preset from '../../src/index.js';
import { createGenerator } from 'unocss';

export default async function (source, config = {}) {
    config = Object.hasOwnProperty('tokens') ? config : { tokens: config };

    const uno = await createGenerator({
        presets: [preset(config.tokens)],
    });

    const { css } = await uno.generate(source);

    return css.replace(/^\/\* layer: (default|abstractions) \*\/\n/, '');
}
