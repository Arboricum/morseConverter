

export const textToClassicalMorse = {
  A: '.-',
  À: '.-', // Normalizzato su A
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  É: '.',  // Normalizzato su E
  È: '.',  // Normalizzato su E
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  Ì: '..', // Normalizzato su I
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  Ò: '---', // Normalizzato su O
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  Ù: '..-', // Normalizzato su U
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  '.': '.-.-.-',
  ',': '--..--',
  ':': '---...',
  '?': '..--..',
  '=': '-...-',
  '-': '-....-',
  '(': '-.--.',
  ')': '-.--.-',
  '"': '.-..-.',
  "'": '.----.',
  '/': '-..-.',
  '@': '.--.-.',
  '!': '-.-.--'
};

/* export function binaryCode() {
  const code = Object.keys(classicalCode);
  const binaryCode = { ...classicalCode };

  code.forEach((key) => {
    let newValue = binaryCode[key]
      .split('')
      .map((value) => (value === '-' ? '1' : '0'))
      .join('');

    binaryCode[key] = newValue; 
  });

  return binaryCode;
}; */

export const textToClassicalMorseNoExceptions = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  '.': '.-.-.-',
  ',': '--..--',
  ':': '---...',
  '?': '..--..',
  '=': '-...-',
  '-': '-....-',
  '(': '-.--.',
  ')': '-.--.-',
  '"': '.-..-.',
  "'": '.----.',
  '/': '-..-.',
  '@': '.--.-.',
  '!': '-.-.--'
};

export function textToBinaryMorse() {
  return Object.entries(textToClassicalMorse).reduce((acc, [key, value]) => {
    acc[key] = value
      .split('')
      .map((char) => (char === '-' ? '1' : '0'))
      .join('');  // Unisce l'array in una stringa binaria
    return acc;
  }, {});
}
function textToBinaryMorseNoExceptions() {
  return Object.entries(textToClassicalMorseNoExceptions).reduce((acc, [key, value]) => {
    acc[key] = value
      .split('')
      .map((char) => (char === '-' ? '1' : '0'))
      .join('');  // Unisce l'array in una stringa binaria
    return acc;
  }, {});
}
/* export function morseToText(inputType) {
  const inputCodeType = inputType === 'morse' ? textToClassicalMorse : textToBinaryMorse();
  const morseToCharMap = {};
  Object.entries(inputCodeType).forEach(([key, value]) => {
    morseToCharMap[value] = key;
  });

  return morseToCharMap;
} */


export function morseToText(inputType) {
  // Determina il codice da usare (senza eseguire la funzione se è textToBinaryMorse)
  const inputCodeType = 
    inputType === 'morse' ? 
    textToClassicalMorseNoExceptions : 
    textToBinaryMorseNoExceptions();

  // Creiamo un oggetto con chiave-valore invertiti per la decodifica
  const morseToCharMap = Object.entries(inputCodeType).reduce((acc, [key, value]) => {
    acc[value] = key; // Invertiamo chiave e valore
    return acc;
  }, {});

  return morseToCharMap;
}


