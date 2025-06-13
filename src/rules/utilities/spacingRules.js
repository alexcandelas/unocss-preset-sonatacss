import resolveNumericValue from '../../utils/resolveNumericValue.js';
import { directionalDeclaration, numericDeclaration } from '../../utils/buildUtilityDeclarations.js';

const marginDirections = {
    t: ['margin-top'],
    b: ['margin-bottom'],
    l: ['margin-left'],
    r: ['margin-right'],
    x: ['margin-left', 'margin-right'],
    y: ['margin-bottom', 'margin-top'],
    bs: ['margin-block-start'],
    be: ['margin-block-end'],
    is: ['margin-inline-start'],
    ie: ['margin-inline-end'],
    block: ['margin-block'],
    inline: ['margin-inline'],
};

const paddingDirections = {
    t: ['padding-top'],
    b: ['padding-bottom'],
    l: ['padding-left'],
    r: ['padding-right'],
    x: ['padding-left', 'padding-right'],
    y: ['padding-bottom', 'padding-top'],
    bs: ['padding-block-start'],
    be: ['padding-block-end'],
    is: ['padding-inline-start'],
    ie: ['padding-inline-end'],
    block: ['padding-block'],
    inline: ['padding-inline'],
};

function buildSpaceDeclarations([_, negative, direction, size, unit = '']) {
    const value = resolveNumericValue(negative, size, unit);

    if (value === undefined) return;

    if (direction === 'x') {
        return { 'margin-inline-start': 0, 'margin-inline-end': value };
    }

    if (direction === 'y') {
        return { 'margin-block-start': 0, 'margin-block-end': value };
    }
}

export const margin = [
    [/^(-?)m-(\d+(?:\.\d+)?)([a-z]+|%)?$/, numericDeclaration('margin')],
    [/^(-?)m-(\d+\/\d+)$/, numericDeclaration('margin')],
    [/^(-?)m([trblxy]|[bi][se])-(\d+(?:\.\d+)?)([a-z]+|%)?$/, directionalDeclaration('margin', { propsByDirection: marginDirections })],
    [/^(-?)m([trblxy]|[bi][se])-(\d+\/\d+)$/, directionalDeclaration('margin', { propsByDirection: marginDirections })],
    [/^(-?)m-(block|inline)-(\d+(?:\.\d+)?)([a-z]+|%)?$/, directionalDeclaration('margin', { propsByDirection: marginDirections })],
    [/^(-?)m-(block|inline)-(\d+\/\d+)$/, directionalDeclaration('margin', { propsByDirection: marginDirections })],
];

export const padding = [
    [/^(-?)p-(\d+(?:\.\d+)?)([a-z%]+)?$/, numericDeclaration('padding')],
    [/^(-?)p([trblxy]|[bi][se])-(\d+(?:\.\d+)?)([a-z%]+)?$/, directionalDeclaration('padding', { propsByDirection: paddingDirections })],
    [/^(-?)p-(block|inline)-(\d+(?:\.\d+)?)([a-z%]+)?$/, directionalDeclaration('padding', { propsByDirection: paddingDirections })],
];

export const space = [
    [/^(-?)space-([x|y])-(\d+)$/, buildSpaceDeclarations],
    [/^(-?)space-([x|y])-(\d+(?:\.\d+)?)([a-z]+)$/, buildSpaceDeclarations],
];
