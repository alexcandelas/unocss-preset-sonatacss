import testUtility from '../../utils/testUtility.js';
import { it } from "vitest";

const colors = {
    white: '#fff',
    ring: '#007acddd',
    'blue-5': '#f5faff',
    'blue-50': '#008ae8',
}

it.each([
    ['color-current', '.color-current {color: currentColor;}'],
    ['color-transparent', '.color-transparent {color: transparent;}'],
    ['color-blue-50', '.color-blue-50 {color: var(--color-blue-50);}'],
    ['color-white', '.color-white {color: var(--color-white);}'],
    ['color-ring', '.color-ring {color: var(--color-ring);}'],
])('generates text color (%s)',
    (source, expected) => testUtility(source, expected, { colors })
);

it.each([
    ['color-blue-50/0', '.color-blue-50\\/0 {color: color-mix(in srgb, var(--color-blue-50) 0%, transparent);}'],
    ['color-blue-50/20', '.color-blue-50\\/20 {color: color-mix(in srgb, var(--color-blue-50) 20%, transparent);}'],
    ['color-blue-50/100', '.color-blue-50\\/100 {color: color-mix(in srgb, var(--color-blue-50) 100%, transparent);}']
])('applies opacity to color utilities (%s)',
    (source, expected) => testUtility(source, expected, { colors })
);

it('does not generate class for undefined colors',
    testUtility('color-blue-11', '', { colors })
);

it.each([
    ['bg-current', '.bg-current {background-color: currentColor;}'],
    ['bg-transparent', '.bg-transparent {background-color: transparent;}'],
    ['bg-blue-50', '.bg-blue-50 {background-color: var(--color-blue-50);}'],
    ['bg-white', '.bg-white {background-color: var(--color-white);}'],
    ['bg-ring', '.bg-ring {background-color: var(--color-ring);}'],
])('generates background color (%s)',
    (source, expected) => testUtility(source, expected, { colors })
);

it.each([
    ['bg-blue-50/0', '.bg-blue-50\\/0 {background-color: color-mix(in srgb, var(--color-blue-50) 0%, transparent);}'],
    ['bg-blue-50/20', '.bg-blue-50\\/20 {background-color: color-mix(in srgb, var(--color-blue-50) 20%, transparent);}'],
    ['bg-blue-50/100', '.bg-blue-50\\/100 {background-color: color-mix(in srgb, var(--color-blue-50) 100%, transparent);}']
])('applies opacity to background-color utilities (%s)',
    (source, expected) => testUtility(source, expected, { colors })
);

it('does not generate background class for undefined colors',
    testUtility('bg-blue-11', '', { colors })
);
