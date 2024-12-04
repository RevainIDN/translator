import { useState } from 'react'
import '../styles/App.css'
import LanguageSelector from './LanguageSelector'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='translator'>
        <div className='area enteredArea'>
          <LanguageSelector type={'sourse'} />
        </div>
        <div className='area translatedArea'>
          <LanguageSelector type={'target'} />
        </div>
      </div>
    </>
  )
}