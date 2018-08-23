//
// Get decimal places
//
const getDecimalPlaces = number => {
    return number.toString().indexOf(".") === -1 ? 0 : number.toString().split(".")[1].length
};

//
// Random integer
//
const randomInteger = ( min, max ) => {
    return Math.floor((Math.random() * max) + min);
};

//
// Create range between numbers
// with min and max inclusive.
//
const createRange = ( min, max, step = 1 ) => {

    if ( typeof min === "number" && typeof max === "number" && typeof step === "number" ) {
        const interval = [ min ];
        let i = min;
        while ( min < max ? i + step <= max : i - step >= max  ) {
            min < max ? i += step : i -= step;

            interval.push( parseInt(i.toFixed( getDecimalPlaces( step ))));
        }
        return interval;
    } else {
        throw new Error(`
    The given parameters have got the wrong type: 
    min: ${min} is ${typeof min} ${typeof min !== "number" ? "[NOT OK]" : "[OK]"} 
    max: ${max} is ${typeof max} ${typeof max !== "number" ? "[NOT OK]" : "[OK]"}
    step: ${max} is ${typeof step} ${typeof step !== "number" ? "[NOT OK]" : "[OK]"}`
        );
    }
};

module.exports = {
    randomInteger: randomInteger,
    createRange: createRange
};