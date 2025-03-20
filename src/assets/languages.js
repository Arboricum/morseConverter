export function languages() {
  const ita = {
    mainTitle: 'Convertitore codice Morse',
    inputResetBtn: 'Resetta',
    outputCopyBtn: 'Copia',
    outputCopyAndResetBtn: 'Copia e resetta',
    outputListenBtn: 'Ascolta',
    typeSelectorLegend: 'Seleziona l\'',
    rulesTitle1: 'Caratteri ammessi',
    rulesTitle2: 'Regole di output',
    rulesTitle3: 'Regole di input',
    outputRules1: 'Se il tipo di input e output coincidono, l\'output sarà uguale all\'input (ad esempio, se come input e output viene impostato "morse", si avrà codice morse in entrambe le finestre);',
    outputRules2: 'il tasto "ascolta" è disponibile solo se l\'output è "morse" o "binary";',
    outputRules3: 'nell\'output "morse" e "binary" le lettere sono separate dal segno "/" e le parole da "//";',
    outputRules4: 'come da convenzione, NON esistono caratteri speciali che non siano specificati nella sezione "Caratteri ammessi"; ciò include le lettere accentate.',
    inputRules1: 'L\'input "morse" e "binary" deve inserito spaziando le lettere col segno "/" e le parole con "//";'
  }
  
  const eng = {
    mainTitle: 'Morse Code Converter',
    inputResetBtn: 'Reset',
    outputCopyBtn: 'Copy',
    outputCopyAndResetBtn: 'Copy and reset',
    outputListenBtn: 'Listen',
    typeSelectorLegend: 'Select ',
    typeSelectorLegend2: 'type',
    rulesTitle1: 'Allowed characters',
    rulesTitle2: 'Output rules',
    rulesTitle3: 'Input rules',
    outputRules1: 'If the input and output types match, the output will be the same as the input (for example, if both input and output are set to "morse", the Morse code will be displayed in both fields);',
    outputRules2: 'The "listen" button is available only if the output is "morse" or "binary";',
    outputRules3: 'In the "morse" and "binary" output, letters are separated by "/" and words by "//";',
    outputRules4: 'As per convention, there are NO special characters other than those specified in the "Allowed characters" section; this includes accented letters.',
    inputRules1: 'The "morse" and "binary" input must be entered with letters separated by "/" and words by "//";'
  }
  
  return { ita, eng };
}
