import testUtility from '../../utils/testUtility.js';
import { it } from "vitest";

it.each([
    ['translate-none', '.translate-none { translate: none; }'],
    ['translate-full', `.translate-full {
        --util-translate-x: 100%;
        --util-translate-y: 100%;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['translate-1/3', `.translate-1\\/3 {
        --util-translate-x: calc(1/3 * 100%);
        --util-translate-y: calc(1/3 * 100%);
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['-translate-1/2', `.-translate-1\\/2 {
        --util-translate-x: calc(1/2 * -100%);
        --util-translate-y: calc(1/2 * -100%);
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['-translate-1px', `.-translate-1px {
        --util-translate-x: -1px;
        --util-translate-y: -1px;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['translate-6', `.translate-6 {
        --util-translate-x: 1.5rem;
        --util-translate-y: 1.5rem;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['-translate-x-1px', `.-translate-x-1px {
        --util-translate-x: -1px;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['translate-x-1/10', `.translate-x-1\\/10 {
        --util-translate-x: calc(1/10 * 100%);
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['translate-y-10%', `.translate-y-10\\% {
        --util-translate-y: 10%;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['-translate-y-2rem', `.-translate-y-2rem {
        --util-translate-y: -2rem;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0);
    }`],
    ['translate-z-10', `.translate-z-10 {
        --util-translate-z: 2.5rem;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0) var(--util-translate-z, 0);
    }`],
    ['-translate-z-20px', `.-translate-z-20px {
        --util-translate-z: -20px;
        translate: var(--util-translate-x, 0) var(--util-translate-y, 0) var(--util-translate-z, 0);
    }`],
])('generates translate utilities (%s)', testUtility);
