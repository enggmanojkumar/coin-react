//round a number to a given number of decimal places
const rounder = (num, precision) => {
    const factor = 10 ** precision;
    return Math.round(num * factor) / factor;
}

export { rounder }