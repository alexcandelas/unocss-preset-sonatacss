import { numericDeclaration, tokenDeclaration } from '../utils/buildUtilityDeclarations.js';

export function fontFamily(tokens) {
    return [
        [/^ff-([\w-]+)$/, tokenDeclaration('font-family', { tokens })],
    ];
}

export function fontSize(tokens) {
    return [
        [/^()fs-(\d+(?:\.\d+)?)([a-z]+|%)?$/, numericDeclaration('font-size')],
        [/^fs-([\w-]+)$/, tokenDeclaration('font-size', { tokens })],
    ];
}

export function fontWeight(tokens) {
    return [
        [/^()fw-(\d+)$/, numericDeclaration('font-weight', { unitlessToRems: false })],
        [/^fw-([\w-]+)$/, tokenDeclaration('font-weight', { tokens })],
    ];
}
