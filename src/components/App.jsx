import { useState } from 'react'
import '../styles/App.css'
import LanguageSelector from './LanguageSelector'
import TextArea from './TextArea'
import TranslateButton from './TranslateButton'
import languages from './languagesArray'

export default function App() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [originatlText, setOriginatlText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSource = (event) => {
    const value = event.target.value;

    setOriginatlText(value);
  }

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector type={'sourse'} languages={languages} />
          <TextArea canWrite={true} numLetters={true} handleSource={handleSource} />
          <TranslateButton originatlText={originatlText} languages={languages} setTranslatedText={setTranslatedText} translatedText={translatedText} />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector type={'target'} languages={languages} />
          <TextArea canWrite={false} translatedText={translatedText} />
        </div>
      </div>
    </>
  )
}