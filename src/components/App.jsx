import { useState } from 'react'
import '../styles/App.css'
import LanguageSelector from './LanguageSelector'
import TextArea from './TextArea'
import TranslateButton from './TranslateButton'
import languages from './languagesArray'

export default function App() {

  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('fr');
  console.log(sourceLanguage, targetLanguage)
  const [originatlText, setOriginatlText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSource = (event) => {
    const value = event.target.value;

    setOriginatlText(value);
  }

  const handleLanguageChange = (language, type) => {
    if (type === 'sourse') {
      setSourceLanguage(language);
    } else if (type === 'target') {
      setTargetLanguage(language);
    }
  };

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector
            type={'sourse'}
            languages={languages}
            selectedLanguage={sourceLanguage}
            setSelecteedLanguage={setSourceLanguage}
            handleLanguageChange={handleLanguageChange}
          />
          <TextArea
            canWrite={true}
            numLetters={true}
            handleSource={handleSource}
            originatlText={originatlText.length}
          />
          <TranslateButton
            originatlText={originatlText}
            languages={languages}
            setTranslatedText={setTranslatedText}
            translatedText={translatedText}
          />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector
            type={'target'}
            languages={languages}
            selectedLanguage={targetLanguage}
            setSelecteedLanguage={setTargetLanguage}
            handleLanguageChange={handleLanguageChange}
          />
          <TextArea
            canWrite={false}
            translatedText={translatedText}
          />
        </div>
      </div>
    </>
  )
}