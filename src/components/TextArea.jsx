import '../styles/TextArea.css'
import { useState } from 'react';

export default function TextArea({ type, handleSource, usedText, selectedLanguage }) {
	const [isSpeaking, setIsSpeaking] = useState(false);

	const handleVolume = () => {
		if ('speechSynthesis' in window) {
			if (speechSynthesis.speaking) {
				speechSynthesis.cancel();
				setIsSpeaking(false);
				return;
			}

			const voices = speechSynthesis.getVoices();

			if (voices.length === 0) {
				setTimeout(handleVolume, 1000);
			} else {
				console.log('Votes uploaded:', voices);
			}

			const utterance = new SpeechSynthesisUtterance(usedText);
			utterance.lang = selectedLanguage;
			utterance.rate = 1;
			utterance.pitch = 1;

			const selectedVoice = voices.find(voice => voice.lang === selectedLanguage);
			utterance.voice = selectedVoice || voices[0];

			speechSynthesis.speak(utterance);
			setIsSpeaking(true);

			utterance.onend = () => {
				setIsSpeaking(false);
			};
		} else {
			console.log('Speech Synthesis API is not supported in your browser.');
		}
	}

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(usedText);
		} catch (error) {
			console.error('Failed to copy text:', error)
		}
	}

	return (
		<>
			<div className='input-area'>
				{type === 'sourse'
					? <textarea className='textarea' onChange={handleSource} maxLength={500} name="" id=""></textarea>
					: <textarea className='textarea' value={usedText} readOnly={true} name="" id=""></textarea>}
				{type === 'sourse' && <p className='num-letters'>{usedText.length}/500</p>}
				<div className='options'>
					<button className='option-btn volume' onClick={handleVolume}></button>
					<button className='option-btn copy' onClick={handleCopy}></button>
				</div>
			</div>
		</>
	)
}