const layer = { layer: 'abstractions' };

export const linkOverlay = [
    [/^link-overlay$/, ([], { symbols }) => ({
        [symbols.selector]: selector => `${selector}::after`,
        'content': '""',
        'inset': 0,
        'position': 'absolute',
        'z-index': 1,
    }), layer],
];
