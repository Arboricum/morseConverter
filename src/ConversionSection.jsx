import { useState } from "react"
import InputTxt from "./components/InputTxt"
import OutputTxt from "./components/OutputTxt"
import { convertInput } from "./utils/utils"
import { useEffect } from "react"
import { useCallback } from "react"

export default function ConversionSection() {
  const [inputType, setInputType] = useState('text')
  const [outputType, setOutputType] = useState('morse')
  const [inputContent, setInputContent] = useState('')
  const [outputContent, setOutputContent] = useState('')

  const handleInputType = (newType) => {
    setInputType(newType)
  }

  const handleOutputType = (newType) => {
    console.log(newType)
    setOutputType(newType)
  }

  const resetContent = () => {
    setInputContent('')
    setOutputContent('')
  }

  const onInputContent = (event) => {
    const newInput = event.target.value.toUpperCase()
    setInputContent(newInput)
  }

  const handleOutputContent = useCallback(() => {
    const currentOutput = convertInput(inputType, outputType, inputContent)
    setOutputContent(currentOutput)
  }, [inputType, outputType, inputContent])

  useEffect(() => {
    handleOutputContent()
  }, [inputType, outputType, handleOutputContent])

  return (
    <>
      <div className="conversionSection">
        <InputTxt 
          inputType={inputType} 
          inputContent={inputContent}
          onSelectInputType={handleInputType} 
          onInputContent={onInputContent} 
          resetContent={resetContent}
        />
        <OutputTxt 
          outputType={outputType} 
          onSelectOutType={handleOutputType} 
          contentToOutput={outputContent} 
          resetContent={resetContent}
        />
      </div>
    </>
  )
}
