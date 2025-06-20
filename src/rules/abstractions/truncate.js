const layer = { layer: 'abstractions' };

export const truncate = [
    ['truncate', {
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
    }, layer],
    ['truncate-none', {
        'overflow': 'visible',
        'text-overflow': 'clip',
        'white-space': 'normal',
    }, layer],
];
