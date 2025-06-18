import testUtility from '../../utils/testUtility.js';
import { it } from "vitest";

it.each([
    ['m-4', '.m-4 {margin: 1rem;}'],
    ['-m-6', '.-m-6 {margin: -1.5rem;}'],
    ['m-20rem', '.m-20rem {margin: 20rem;}'],
    ['m-10px', '.m-10px {margin: 10px;}'],
    ['-m-3cm', '.-m-3cm {margin: -3cm;}'],
    ['m-25%', '.m-25\\% {margin: 25%;}'],
    ['m-1/12', '.m-1\\/12 {margin: calc(1 / 12 * 100%);}'],
    ['-m-1/3', '.-m-1\\/3 {margin: calc(1 / 3 * -100%);}'],
    ['m-4foo', '']
])('generates margins (%s)', testUtility);

it.each([
    ['-mt-1px', '.-mt-1px {margin-top: -1px;}'],
    ['mb-4', '.mb-4 {margin-bottom: 1rem;}'],
    ['ml-2.5cm', '.ml-2\\.5cm {margin-left: 2.5cm;}'],
    ['ml-1/4', '.ml-1\\/4 {margin-left: calc(1 / 4 * 100%);}'],
    ['mr-0', '.mr-0 {margin-right: 0;}'],
    ['mx-2', '.mx-2 {margin-left: 0.5rem; margin-right: 0.5rem;}'],
    ['-my-4', '.-my-4 {margin-bottom: -1rem; margin-top: -1rem;}'],
    ['-my-1/10', '.-my-1\\/10 {margin-bottom: calc(1 / 10 * -100%); margin-top: calc(1 / 10 * -100%);}'],
    ['mbs-0', '.mbs-0 {margin-block-start: 0;}'],
    ['mbe-4', '.mbe-4 {margin-block-end: 1rem;}'],
    ['mis-4', '.mis-4 {margin-inline-start: 1rem;}'],
    ['mie-4', '.mie-4 {margin-inline-end: 1rem;}'],
    ['mie-3/5', '.mie-3\\/5 {margin-inline-end: calc(3 / 5 * 100%);}'],
    ['m-inline-4', '.m-inline-4 {margin-inline: 1rem;}'],
    ['-m-block-4', '.-m-block-4 {margin-block: -1rem;}'],
    ['-m-block-4', '.-m-block-4 {margin-block: -1rem;}'],
    ['m-block-1/12', '.m-block-1\\/12 {margin-block: calc(1 / 12 * 100%);}'],
    ['-m-inline-1/3', '.-m-inline-1\\/3 {margin-inline: calc(1 / 3 * -100%);}'],
])('generates directional margins (%s)', testUtility);
