import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageCtxProvider from './context/languageCtx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageCtxProvider>
    <App />
    </LanguageCtxProvider>
  </StrictMode>,
)
