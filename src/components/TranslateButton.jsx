import '../styles/TranslateButton.css'

export default function TranslateButton({ originatlText, translatedText, setTranslatedText, languages }) {
	const encodedText = encodeURIComponent(originatlText);
	const apiUrl = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${languages[0].code}|${languages[3].code}`;
	let resp = '';

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