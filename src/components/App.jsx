import { useState } from 'react'
import '../styles/App.css'
import LanguageSelector from './LanguageSelector'
import TextArea from './TextArea'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector type={'sourse'} />
          <TextArea canWrite={true} numLetters={true} />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector type={'target'} />
          <TextArea canWrite={false} />
        </div>
      </div>
    </>
  )
}