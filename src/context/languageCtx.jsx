import {createContext, useContext, useState} from 'react'
import { languages } from '../assets/languages'

const LanguageCtx = createContext()

export default function LanguageCtxProvider({children}) {
  // eslint-disable-next-line no-unused-vars
  const {ita, eng} = languages()
  const [currentLang, setCurrentLang] = useState(ita)
  const handleLang = (newLan) => {
    newLan === 'ita'? 
      setCurrentLang(ita):
      setCurrentLang(eng)
  }
  return (
    <LanguageCtx.Provider
      value={{
        currentLang,
        handleLang
      }}
    >
      {children}
    </LanguageCtx.Provider>
  )
}

export const useLanguageCtx = () => useContext(LanguageCtx)
