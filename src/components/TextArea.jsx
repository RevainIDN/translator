import '../styles/TextArea.css'

export default function TextArea({ canWrite, numLetters }) {
	return (
		<>
			<div className='input-area'>
				{canWrite === true
					? <textarea className='textarea' name="" id="">hello</textarea>
					: <textarea className='textarea' readOnly="true" name="" id="">hello</textarea>}
				{numLetters === true && <p className='num-letters'>.../500</p>}
				<div className='options'>
					<button className='option-btn volume'></button>
					<button className='option-btn copy'></button>
				</div>
			</div>
		</>
	)
}