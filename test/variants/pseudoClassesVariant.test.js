import testUtility from '../utils/testUtility.js';
import { it } from "vitest";

it.each([
    'autofill',
    'enabled',
    'disabled',
    'placeholder-shown',
    'default',
    'checked',
    'indeterminate',
    'valid',
    'invalid',
    'in-range',
    'out-of-range',
    'required',
    'optional',
    'user-valid',
    'user-invalid',
    'empty',
    'first-of-type',
    'last-of-type',
    'hover',
    'active',
    'focus',
    'focus-visible',
    'focus-within',
])('generates pseudo classes (%s)', (pseudoClass) => {
    const source = pseudoClass + ':m-4';
    const expected = `.${pseudoClass}\\:m-4:${pseudoClass} { margin: 1rem; }`;

    testUtility(source, expected);
});

it.each([
    ['first', 'first-child'],
    ['last', 'last-child'],
    ['even', 'nth-child(even)'],
    ['odd', 'nth-child(odd)']
])('generates pseudo classes with alias (%s)', (pseudoClass, suffix) => {
    const source = pseudoClass + ':m-4';
    const expected = `.${pseudoClass}\\:m-4:${suffix} { margin: 1rem; }`;

    testUtility(source, expected);
});
