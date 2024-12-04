import '../styles/LanguageSelector.css'

export default function LanguageSelector({ type }) {
	return (
		<>
			<div className='language-selector'>
				<ul className='language-list'>
					{type === 'sourse' && <li className='language-item'><button className='language-btn'>Detect Language</button></li>}
					<li className='language-item'><button className='language-btn active'>English</button></li>
					<li className='language-item'><button className='language-btn'>French</button></li>

				</ul>
				{type === 'target' && <button className='reverse-btn'></button>}
			</div>
		</>
	)
}