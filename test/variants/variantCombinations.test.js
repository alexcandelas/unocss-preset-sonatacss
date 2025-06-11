import testUtility from '../utils/testUtility.js';
import { it } from "vitest";

const config = {
    breakpoints: {
        lg: 1024,
    },
    colors: {
        blue: '#008ae8',
    }
}

it.each([
    [
        'print:placeholder:hidden',
        `@media print {
            .print\\:placeholder\\:hidden::placeholder { display: none; }
        }`
    ],
    [
        'lg:hover:bg-blue',
        `@media (width >= 1024px) {
            .lg\\:hover\\:bg-blue\:hover { background-color: var(--color-blue); }
        }`
    ],
    [
        '<lg:*:bt-1',
        `@media (width < 1024px) {
            .\\<lg\\:\\*\\:bt-1 > * { border-top-width: 1px; }
        }`
    ],
    [
        'aria-disabled:placeholder:color-current',
        '.aria-disabled\\:placeholder\\:color-current[aria-disabled="true"]::placeholder { color: currentColor; }'
    ],
    [
        'placeholder:aria-disabled:color-current',
        '.placeholder\\:aria-disabled\\:color-current[aria-disabled="true"]::placeholder { color: currentColor; }'
    ],
    [
        'focus:before:p-4',
        '.focus\\:before\\:p-4:focus::before { padding: 1rem; }'
    ],
])('generates combined variants (%s)',
    (source, expected) => testUtility(source, expected, config)
);
