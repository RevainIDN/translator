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
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSource = (event) => {
    const value = event.target.value;

    setOriginalText(value);
  };

  const handleLanguageChange = (language, type) => {
    if (type === 'sourse') {
      setSourceLanguage(language);
    } else if (type === 'target') {
      setTargetLanguage(language);
    }
  };

  const handleMoveLanguage = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector
            type={'sourse'}
            languages={languages}
            selectedLanguage={sourceLanguage}
            handleLanguageChange={handleLanguageChange}
          />
          <TextArea
            type={'sourse'}
            handleSource={handleSource}
            usedText={originalText}
          />
          <TranslateButton
            originalText={originalText}
            languages={languages}
            setTranslatedText={setTranslatedText}
            translatedText={translatedText}
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
          />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector
            type={'target'}
            languages={languages}
            selectedLanguage={targetLanguage}
            handleLanguageChange={handleLanguageChange}
            handleMoveLanguage={handleMoveLanguage}
          />
          <TextArea
            type={'target'}
            usedText={translatedText}
          />
        </div>
      </div>
    </>
  )
}