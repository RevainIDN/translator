import { useState } from 'react'
import '../styles/App.css'
import LanguageSelector from './LanguageSelector'
import TextArea from './TextArea'
import TranslateButton from './TranslateButton'
import languages from './languagesArray'

export default function App() {
  const [sourceLanguage, setSourceLanguage] = useState('');

  const handleSource = (event) => {
    const value = event.target.value;

    setSourceLanguage(value);
    console.log(sourceLanguage)
  }

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector type={'sourse'} languages={languages} />
          <TextArea canWrite={true} numLetters={true} handleSource={handleSource} />
          <TranslateButton />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector type={'target'} languages={languages} />
          <TextArea canWrite={false} />
        </div>
      </div>
    </>
  )
}