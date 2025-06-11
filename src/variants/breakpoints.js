import breakpointOrNumeric from '../utils/breakpointOrNumeric.js';

let breakpoints;

function buildSingleQuery(originalMatcher, match) {
    let [_, capture, ltSymbol, value] = match;
    const isMaxWidth = !! ltSymbol;
    value = breakpointOrNumeric(value, breakpoints);

    return {
        matcher: originalMatcher.slice(capture.length),
        handle: (input, next) => {
            return next({
                ...input,
                parent: isMaxWidth
                    ? `@media (width < ${value})`
                    : `@media (width >= ${value})`,
            })
        }
    };
}

function buildRangeQuery(originalMatcher, match) {
    let [_, capture, from, to] = match;
    from = breakpointOrNumeric(from, breakpoints);
    to = breakpointOrNumeric(to, breakpoints);

    return {
        matcher: originalMatcher.slice(capture.length),
        handle: (input, next) => {
            return next({
                ...input,
                parent: `@media (${from} <= width < ${to})`
            })
        }
    };
}

export default function (_breakpoints) {
    breakpoints = _breakpoints;
    const joinedBreakpoints = Object.keys(breakpoints).join('|');
    const valueCapture = `(${joinedBreakpoints}|\\d+)(?:px)?`;

    return {
        name: 'breakpoints',
        match(matcher) {
            // Match a media query variant using a registered breakpoint or numeric value
            // Examples: <lg:m-4, 800px:m-4, <1000:m-4
            const singleMatch = matcher.match(new RegExp(`^((<?)${valueCapture}:).+$`));

            if (singleMatch) {
                return buildSingleQuery(matcher, singleMatch);
            }


            // Match a range media query using registered breakpoints or numeric values
            // Examples: sm<lg:m-4, 400px<700px:m-4, 400<lg:m-4
            const rangedMatch = matcher.match(new RegExp(`^(${valueCapture}<${valueCapture}:).+$`));

            if (rangedMatch) {
                return buildRangeQuery(matcher, rangedMatch);
            }

            return matcher;
        }
    };
}