import { useRef } from "react";
import TypeSelector from "./TypeSelector";
import { useAudio } from "../hooks/useAudio";
import shortSound from '../sounds/short.mp3';
import longSound from '../sounds/long.mp3';
import { copyOutput, copyOutputAndReset } from "../utils/utils";
import { useLanguageCtx } from "../context/languageCtx";

export default function OutputTxt({ outputType, onSelectOutType, contentToOutput, resetContent }) {
  const toneRef = useRef(null); // ✅ Evita di reinizializzare Tone.js ad ogni render

  const {currentLang} = useLanguageCtx()

  // Hook per riprodurre i suoni del codice Morse
  const [, playShort] = useAudio(shortSound);
  const [, playLong] = useAudio(longSound);

  // ✅ Importazione dinamica di Tone.js quando necessario
  const initTone = async () => {
    if (!toneRef.current) {
      const Tone = await import("tone"); // ✅ Importa Tone.js solo al primo click
      toneRef.current = Tone;
    }
    if (toneRef.current.context.state === "suspended") {
      await toneRef.current.start(); // ✅ Sblocca il contesto audio
      console.log("Tone.js avviato!");
    }
  };

  // Funzione per riprodurre il codice Morse
  const playMorseAudio = async () => {
    if (outputType !== "morse" && outputType !== "binary") return;

    await initTone(); // ✅ Assicura che Tone.js sia pronto prima di riprodurre

    const symbols = contentToOutput.split("");
    let time = 0;
    let timeToAdd = 0

    symbols.forEach((symbol) => {
      setTimeout(() => {
        if (symbol === "." || symbol === "0") {
          playShort();
        } else if (symbol === "-" || symbol === "1") {
          playLong();
        }
      }, time * 300); // ✅ Timing migliorato con un delay di 300ms per simbolo
      if (symbol === '/') {timeToAdd = 2} else 
      if (symbol === '-') {timeToAdd = 1.5} else 
      if (symbol === '.') {timeToAdd = 1}
      time += timeToAdd; // ✅ Durata maggiore per le linee
    });
  };

  return (
    <div className="outputTxt">
      <TypeSelector onSelectType={onSelectOutType} mode="output" />
      <h2>Output: {outputType}</h2>
      <textarea rows={10} value={contentToOutput} readOnly />

      <button 
        type="button" 
        onClick={() => copyOutput(contentToOutput)}
      >
        {currentLang.outputCopyBtn}
      </button>
      <button 
        type="button" 
        onClick={() => copyOutputAndReset(contentToOutput, resetContent)}
      >
        {currentLang.outputCopyAndResetBtn}
      </button>
      <button 
        type="button" 
        onClick={playMorseAudio}
        disabled={outputType === 'text' || contentToOutput === ''}
      >
        {currentLang.outputListenBtn}
      </button>
    </div>
  );
}
