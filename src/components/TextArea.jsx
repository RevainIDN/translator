import '../styles/TextArea.css'

export default function TextArea({ type, handleSource, usedText }) {
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
					<button className='option-btn volume'></button>
					<button className='option-btn copy' onClick={handleCopy}></button>
				</div>
			</div>
		</>
	)
}