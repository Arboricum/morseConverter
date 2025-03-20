import ConversionSection from './ConversionSection'
import Rules from './components/Rules'
import './App.css'
import { useLanguageCtx } from './context/languageCtx'
import itaFlag from './assets/img/ita.png'
import engFlag from './assets/img/eng.png'

function App() {
  const {currentLang, handleLang} = useLanguageCtx()
  return (
    <main>
      <h1>{currentLang.mainTitle}</h1>
      <div className='lang-changer'>
        <button className='lang-changer-btn' type='button' onClick={() => handleLang('ita')}>
          <img src={itaFlag} alt='bandiera italiana' />
        </button>
        <button className='lang-changer-btn' type='button' onClick={() => handleLang('eng')}>
          <img src={engFlag} alt='english flag' />
        </button>
      </div>
      <ConversionSection />
      <Rules />
    </main>
  )
}

export default App
