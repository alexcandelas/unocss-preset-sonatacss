import { tokenDeclaration } from '../utils/buildUtilityDeclarations.js';

export function fill(tokens) {
    return [
        [/^fill-([\w-]+)$/, tokenDeclaration('fill', { tokens, cssVariable: 'color' })],
        ['fill-inherit', { fill: 'inherit' }],
        ['fill-current', { fill: 'currentColor' }],
        ['fill-none', { fill: 'none' }],
    ];
}

export function stroke(tokens) {
    return [
        [/^stroke-([\w-]+)$/, tokenDeclaration('stroke', { tokens, cssVariable: 'color' })],
        ['stroke-inherit', { stroke: 'inherit' }],
        ['stroke-current', { stroke: 'currentColor' }],
        ['stroke-none', { stroke: 'none' }],
    ];
}

export const strokeWidth = [
    [/^stroke-(\d+(?:.\d+)?)$/, ([_, value]) => ({ 'stroke-width': value })],
];
