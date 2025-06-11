import { definePreset } from 'unocss';
import attributes from './variants/attributes.js';
import breakpoints from './variants/breakpoints.js';
import children from './variants/children.js';
import containerVariant from './variants/container.js';
import print from './variants/print.js';
import pseudoClasses from './variants/pseudoClasses.js';
import pseudoElements from './variants/pseudoElements.js';
import theme from './variants/theme.js';
import { align, inset, justify, place, position } from './rules/positionRules.js';
import { backgroundColor, color } from './rules/colorRules.js';
import { borderColor, borderWidth, radius } from './rules/borderRules.js';
import { boxShadow, insetBoxShadow } from './rules/boxShadowRules.js';
import { breaks } from './rules/breakRules.js';
import { clear, float } from './rules/floatRules.js';
import { columns } from './rules/columnsRules.js';
import { container } from './rules/responsiveRules.js';
import { display } from './rules/displayRules.js';
import { fill, stroke, strokeWidth } from './rules/svgRules.js';
import { flex, flexBasis, flexDirection, flexGrow, flexShrink, flexWrap } from './rules/flexRules.js';
import { fontFamily, fontSize, fontWeight } from './rules/fontRules.js';
import { gap } from './rules/gapRules.js';
import { gridAuto, gridSize, gridTemplate } from './rules/gridRules.js';
import { height, width } from './rules/sizeRules.js';
import { isolation, zIndex } from './rules/stackingRules.js';
import { letterSpacing, lineHeight, textAlign, textTransform, verticalAlign, whiteSpace } from './rules/textRules.js';
import { margin, padding, space } from './rules/spacingRules.js';
import { objectFit, objectPosition } from './rules/objectRules.js';
import { opacity } from './rules/opacityRules.js';
import { order } from './rules/orderRules.js';
import { overflow } from './rules/overflowRules.js';
import { pointerEvents } from './rules/pointerEventsRules.js';
import { ratio } from './rules/aspectRatioRules.js';
import { translate } from '././rules/translateRules.js';
import { visibility } from './rules/visibilityRules.js';

export default definePreset(tokens => ({
    name: 'unocss-preset-sonatacss',
    tokens,
    rules: [
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
}));
