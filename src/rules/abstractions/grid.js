const layer = { layer: 'abstractions' };

export const row = [
    ['row/auto', {
        'column-gap': 'var(--gutter)',
        'display': 'grid',
        'grid-template-columns': 'repeat(auto-fit, minmax(0, 1fr))',
    }, layer],
    [/^row(?:\/(\d+))?$/, ([_, columns = 12]) => {
        return {
            '--grid-columns': columns,
            'column-gap': 'var(--gutter)',
            'display': 'grid',
            'grid-template-columns': 'repeat(var(--grid-columns), 1fr)',
        };
    }, layer],
];

export const col = [
    ['col', { 'grid-column-end': 'span var(--grid-columns)' }, layer],
    [/^col-(\d+\/\d+)$/, ([_, fraction]) => ({
        'grid-column-end': `span calc(var(--grid-columns) * ${fraction})`,
    }), layer],
];
