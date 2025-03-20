import { textToClassicalMorse, textToBinaryMorse, morseToText } from "../assets/codice"

//CONVERTITORI

function convertTextToTargetOutput(inputContent, codeType) {
  let tempContentStep1 = inputContent.split(' ')
  let outputContent = tempContentStep1.map((stringElement) => {
    return stringElement.split('').map((el) => {
      if (codeType[el]) {
        return el = codeType[el]
      }
      return
    }).join('/')
  })
  return outputContent.join('//')
}

function convertMorseToTargetOutput(inputContent, inputType) {
  const codeType = morseToText(inputType)
  let tempContentStep1 = inputContent.split('//')
  let outputContent = tempContentStep1.map((morseElement) => {
    return morseElement.split('/').map((el) => {
      if (codeType[el]) {
        return el = codeType[el]
      }
      return
    }).join('')
  })
  return outputContent.join(' ')
}

export function convertInput(inputType, outputType, inputContent) {
  if (inputType === 'text' && outputType === 'morse') {
    return convertTextToTargetOutput(inputContent, textToClassicalMorse)
  }
  if (inputType === 'text' && outputType === 'binary') {
    return convertTextToTargetOutput(inputContent, textToBinaryMorse())
  }
  if (inputType === 'text' && outputType === 'text') {
    return inputContent
  }

  if (inputType === 'morse' && outputType === 'morse') {
    return inputContent
  }
  if (inputType === 'morse' && outputType === 'binary') {
    return convertMorseToTargetOutput(inputContent, inputType)
  }
  if (inputType === 'morse' && outputType === 'text') {
    return  convertMorseToTargetOutput(inputContent, inputType)
  }

  if (inputType === 'binary' && outputType === 'morse') {
    return  convertMorseToTargetOutput(inputContent, inputType)
  }
  if (inputType === 'binary' && outputType === 'binary') {
    return inputContent
  }
  if (inputType === 'binary' && outputType === 'text') {
    return convertMorseToTargetOutput(inputContent, inputType)
  }
}

//COPIA E INCOLLA

// Funzione per copiare il testo
  export const copyOutput = (contentToOutput) => {
    navigator.clipboard.writeText(contentToOutput)
      .then(() => console.log("Testo copiato con successo!"))
      .catch(err => console.error("Errore durante la copia:", err));
  };

  // Funzione per copiare e resettare il contenuto
  export const copyOutputAndReset = (contentToOutput, resetContent) => {
    navigator.clipboard.writeText(contentToOutput)
      .then(() => {
        console.log("Testo copiato con successo!");
        resetContent();
      })
      .catch(err => console.error("Errore durante la copia:", err));
  };

