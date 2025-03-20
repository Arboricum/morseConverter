import TypeSelector from "./TypeSelector"
import { useLanguageCtx } from "../context/languageCtx"

export default function InputTxt({
  inputType, 
  inputContent, 
  onSelectInputType,
  onInputContent, 
  resetContent
}) {
  const {currentLang} = useLanguageCtx()
  return (
    <div className="inputTxt">
      <TypeSelector onSelectType={onSelectInputType} mode='input'/>
      <h2>Input: {inputType}</h2>
      <textarea rows={10} onChange={onInputContent} value={inputContent}>
        
      </textarea>
      <button
        type="button" 
        onClick={resetContent} 
      >{currentLang.inputResetBtn}</button>
    </div>
  )
}
