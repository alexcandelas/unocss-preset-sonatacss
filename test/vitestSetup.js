import { expect } from 'vitest';

function replaceCss(str) {
    return str.replaceAll(/\s+/g, ' ')  // Multiple spaces and linebreaks to a single space
        .replace(/^\s/, '')             // Remove leading space
        .replace(/\s$/, '')             // Remove trailing space
        .replace(/\s?{\s?/g, '{')       // ' { ' => '{'
        .replaceAll('( ', '(')          // '( ' => '('
        .replace(/\s([})])/g, '$1')     // ' }' => '}' and ' )' => ')'
        .replace(/([:;])\s/g, '$1')     // ': ' => ':' and '; ' => ';'
        .replace(/\s?\/\s?/g, '/')      // ' / ' => '/'
        .replaceAll(';}', '}')          // ';}' => '}'
        .replace(/(\.\\3\d)\s/g, '$1'); // Remove space in classes that start with a digit: '.\36 00px' => '.\3600px
}

expect.extend({
    toMatchCss(received, expected) {
        received = replaceCss(received);
        expected = replaceCss(expected);

        return {
            pass: received === expected,
            message: () => `AssertionError: expected '${received}' to be '${expected}'`,
            expected,
            actual: received,
        }
    }
})
