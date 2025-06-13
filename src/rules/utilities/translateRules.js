import resolveNumericValue from '../../utils/resolveNumericValue.js';

function buildDeclaration([_, negative = '', direction, size, unit = '']) {
    const value = resolveNumericValue(negative, size, unit);

    if (value === undefined) return;

    const result = direction
        ? { [`--util-translate-${direction}`]: value }
        : { '--util-translate-x': value, '--util-translate-y': value };

    result.translate = 'var(--util-translate-x, 0) var(--util-translate-y, 0)';

    if (direction === 'z') {
        result.translate += ' var(--util-translate-z, 0)';
    }

    return result;
}

export const translate = [
    ['translate-none', { translate: 'none' }],
    ['translate-full', {
        '--util-translate-x': '100%',
        '--util-translate-y': '100%',
        'translate': 'var(--util-translate-x, 0) var(--util-translate-y, 0)'
    }],
    [/^(-?)translate-(?:([xyz])-)?(\d+(?:\.\d+)?)([a-z]+|%)?$/, buildDeclaration],
    [/^(-?)translate-(?:([xyz])-)?(\d+\/\d+)?$/, buildDeclaration],
];
