import '../styles/TextArea.css'

export default function TextArea({ canWrite, numLetters }) {
	return (
		<>
			<div className='input-area'>
				{canWrite === true
					? <textarea className='textarea' name="" id=""></textarea>
					: <textarea className='textarea' readOnly={true} name="" id=""></textarea>}
				{numLetters === true && <p className='num-letters'>.../500</p>}
				<div className='options'>
					<button className='option-btn volume'></button>
					<button className='option-btn copy'></button>
				</div>
			</div>
		</>
	)
}