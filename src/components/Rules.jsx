import { textToClassicalMorseNoExceptions } from "../assets/codice"
import { useLanguageCtx } from "../context/languageCtx"

export default function Rules() {
  const chars = Object.keys(textToClassicalMorseNoExceptions)
  const {currentLang: lang} = useLanguageCtx()
  return (
    <section>
      <div className='charContainer'>
      <h2>{lang.rulesTitle1}</h2>
        <b>{chars.join(' ')}</b>
      </div>
      <div className="rules">
        <h2>{lang.rulesTitle2}</h2>
        <ul>
          <li>{lang.outputRules1}</li>
          <li>{lang.outputRules2}</li>
          <li>{lang.outputRules3}</li>
          <li>{lang.outputRules4}</li>
        </ul>
      </div>
      <div className="rules">
        <h2>{lang.rulesTitle3}</h2>
        <ul>
          <li>{lang.outputRules1}</li>
        </ul>
      </div>
    </section>
  )
}

