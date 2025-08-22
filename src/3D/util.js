/**
 * Precision to retain in factoredInteger()
 */
const FACTOR = 0;

/**
 * Factor a number by FACTOR and round to the nearest whole number
 */
export const factoredInteger = ( value ) => (
    Math.round( value * ( 10 ** FACTOR ) )
);
