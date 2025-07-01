import { definePreset } from 'unocss';
import attributes from './variants/attributes.js';
import breakpoints from './variants/breakpoints.js';
import children from './variants/children.js';
import containerVariant from './variants/container.js';
import print from './variants/print.js';
import pseudoClasses from './variants/pseudoClasses.js';
import pseudoElements from './variants/pseudoElements.js';
import theme from './variants/theme.js';
import { align, inset, justify, place, position } from './rules/utilities/positionRules.js';
import { backgroundColor, color } from './rules/utilities/colorRules.js';
import { borderColor, borderWidth, radius } from './rules/utilities/borderRules.js';
import { boxShadow, insetBoxShadow } from './rules/utilities/boxShadowRules.js';
import { breaks } from './rules/utilities/breakRules.js';
import { clear, float } from './rules/utilities/floatRules.js';
import { columns } from './rules/utilities/columnsRules.js';
import { container } from './rules/utilities/responsiveRules.js';
import { display } from './rules/utilities/displayRules.js';
import { fill, stroke, strokeWidth } from './rules/utilities/svgRules.js';
import { flex, flexBasis, flexDirection, flexGrow, flexShrink, flexWrap } from './rules/utilities/flexRules.js';
import { fontFamily, fontSize, fontWeight } from './rules/utilities/fontRules.js';
import { gap } from './rules/utilities/gapRules.js';
import { gridAuto, gridSize, gridTemplate } from './rules/utilities/gridRules.js';
import { height, width } from './rules/utilities/sizeRules.js';
import { isolation, zIndex } from './rules/utilities/stackingRules.js';
import { letterSpacing, lineHeight, textAlign, textTransform, verticalAlign, whiteSpace } from './rules/utilities/textRules.js';
import { margin, padding, space } from './rules/utilities/spacingRules.js';
import { objectFit, objectPosition } from './rules/utilities/objectRules.js';
import { opacity } from './rules/utilities/opacityRules.js';
import { order } from './rules/utilities/orderRules.js';
import { overflow } from './rules/utilities/overflowRules.js';
import { pointerEvents } from './rules/utilities/pointerEventsRules.js';
import { ratio } from './rules/utilities/aspectRatioRules.js';
import { translate } from './rules/utilities/translateRules.js';
import { visibility } from './rules/utilities/visibilityRules.js';
import { visuallyHidden } from './rules/utilities/visuallyHidden.js';

let ignoreList;

/**
 * Dynamically import rules from the given file
 * if it's not included on the ignore list.
 *
 * @param {string} file
 * @returns {Promise}
 */
async function importAbstraction(file) {
    const isIgnored = ignoreList.includes('abstractions.*') || ignoreList.includes(`abstractions.${file}`)

    if (isIgnored) return [];

    const rules = await import(`./rules/abstractions/${file}.js`);
    return Object.values(rules).flat();
}

export default definePreset(async (tokens, _ignoreList = []) => {
    ignoreList = _ignoreList;

    return {
        name: 'unocss-preset-sonatacss',
        tokens,
        rules: [
            // Abstractions
            ...await importAbstraction('container'),
            ...await importAbstraction('grid'),
            ...await importAbstraction('linkOverlay'),
            ...await importAbstraction('listInline'),
            ...await importAbstraction('listReset'),
            ...await importAbstraction('media'),
            ...await importAbstraction('tableScroll'),
            ...await importAbstraction('truncate'),

            // Utilities
            ...align,
            ...backgroundColor(tokens?.colors),
            ...borderColor(tokens?.colors),
            ...borderWidth,
            ...breaks,
            ...boxShadow(tokens?.boxShadow),
            ...clear,
            ...color(tokens?.colors),
            ...columns,
            ...container,
            ...display,
            ...fill(tokens?.colors),
            ...flex,
            ...flexBasis,
            ...flexDirection,
            ...flexGrow,
            ...flexShrink,
            ...flexWrap,
            ...float,
            ...fontFamily(tokens?.fontFamily),
            ...fontSize(tokens?.fontSize),
            ...fontWeight(tokens?.fontWeight),
            ...gap,
            ...gridAuto,
            ...gridSize,
            ...gridTemplate,
            ...height,
            ...inset,
            ...insetBoxShadow(tokens?.insetBoxShadow),
            ...isolation,
            ...justify,
            ...letterSpacing(tokens?.letterSpacing),
            ...lineHeight(tokens?.lineHeight),
            ...margin,
            ...objectFit,
            ...objectPosition,
            ...order,
            ...opacity,
            ...overflow,
            ...padding,
            ...place,
            ...pointerEvents,
            ...position,
            ...radius(tokens?.radius),
            ...ratio,
            ...space,
            ...stroke(tokens?.colors),
            ...strokeWidth,
            ...textAlign,
            ...textTransform,
            ...translate,
            ...verticalAlign,
            ...visibility,
            ...visuallyHidden,
            ...whiteSpace,
            ...width,
            ...zIndex,
        ],
        variants: [
            attributes(),
            breakpoints(tokens?.breakpoints ?? {}),
            children(),
            containerVariant(tokens?.breakpoints ?? {}),
            pseudoClasses(),
            pseudoElements(),
            print(),
            theme(),
        ],
    };
});
