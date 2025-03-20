import { useLanguageCtx } from "../context/languageCtx"

export default function TypeSelector({onSelectType, mode}) {
  const {currentLang: lang} = useLanguageCtx()
  return (
    <p>{lang.typeSelectorLegend}{mode==='input'? 'input':'output'} {lang === 'eng' && lang.type}: 
      <input 
        type='radio'
        id={mode==='input'? 'radioInput1':'radioOutput1'} 
        name={mode==='input'? 'radioInput':'radioOutput'}
        onClick={() => onSelectType('text')} 
        defaultChecked={mode === 'input'}
      />
      <label htmlFor={mode==='input'? 'radioInput1':'radioOutput1'}>Text</label>
      <input 
        type='radio'
        id={mode==='input'? 'radioInput2':'radioOutput2'} 
        name={mode==='input'? 'radioInput':'radioOutput'} 
        onClick={() => onSelectType('morse')} 
        defaultChecked={mode === 'output'}
      />
      <label htmlFor={mode==='input'? 'radioInput2':'radioOutput2'}>Morse</label>
      <input 
        type='radio'
        id={mode==='input'? 'radioInput3':'radioOutput3'} 
        name={mode==='input'? 'radioInput':'radioOutput'}
        onClick={() => onSelectType('binary')} 
      />
      <label htmlFor={mode==='input'? 'radioInput3':'radioOutput3'} >Binary</label>
    </p>
  )
}
