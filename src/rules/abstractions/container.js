const layer = { layer: 'abstractions' };

export const container = [
    ['container', {
        'margin-inline': 'auto',
        'max-width': 'var(--container-width, 80rem)',
        'padding-inline': 'var(--container-padding)',
        'width': '100%',
    }, layer],
    ['fluid-container', {
        'padding-inline': 'var(--container-padding)',
        'width': '100%',
    }, layer],
];
