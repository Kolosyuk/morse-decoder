const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let dotDashExpr = '';
    let decodedExpr = [];
    let lengthCounter = 0;
    for (let i = 0; i < expr.length; i += 2) {
        if (expr.substring(i, i + 2) === '00') {
            if (lengthCounter === 5) {
                decodedExpr.push(MORSE_TABLE[dotDashExpr]);
                lengthCounter = 0;
                dotDashExpr = '';
            }
            lengthCounter++;
            continue;
        }
        if (expr.substring(i, i + 2) === '10') {
            if (lengthCounter === 5) {
                decodedExpr.push(MORSE_TABLE[dotDashExpr]);
                lengthCounter = 0;
                dotDashExpr = '';
            }
            dotDashExpr += '.';
            lengthCounter++;
            continue;
        }
        if (expr.substring(i, i + 2) === '11') {
            if (lengthCounter === 5) {
                decodedExpr.push(MORSE_TABLE[dotDashExpr]);
                lengthCounter = 0;
                dotDashExpr = '';
            }
            dotDashExpr += '-';
            lengthCounter++;
            continue;
        }
        if (expr.substring(i, i + 2) === '**') {
            decodedExpr.push(MORSE_TABLE[dotDashExpr])
            decodedExpr.push(' ');
            lengthCounter = 0;
            dotDashExpr = '';
            i += 8;
            continue;
        }
    }
    decodedExpr.push(MORSE_TABLE[dotDashExpr])
    return decodedExpr.join('')
}

module.exports = {
    decode
}