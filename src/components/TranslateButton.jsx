import '../styles/TranslateButton.css'

export default function TranslateButton({ originalText, translatedText, setTranslatedText, languages, sourceLanguage, targetLanguage }) {
	const encodedText = encodeURIComponent(originalText);
	const apiUrl = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLanguage}|${targetLanguage}`;

	const translateText = () => {
		fetch(apiUrl)
			.then(responce => responce.json())
			.then(data => {
				setTranslatedText(data.responseData.translatedText);
				console.log(translatedText);
			})
			.catch(error => console.log('Error fetching data:', error));
	}

	return (
		<button className='translate-btn' onClick={translateText}>Translate</button>
	)
}