import '../styles/LanguageSelector.css'
import { useEffect, useRef } from 'react'

export default function LanguageSelector({ type, languages }) {
	const buttonRef = useRef(null);
	const listRef = useRef(null);

	useEffect(
		() => {
			const handleClick = () => {
				listRef.current.classList.toggle('dropdown-list--visible');
			};

			const button = buttonRef.current;

			if (button) {
				button.addEventListener('click', handleClick);
			}

			return () => {
				if (button) {
					button.removeEventListener('click', handleClick);
				}
			};
		}, []);

	return (
		<>
			<div className='language-selector'>
				<ul className='language-list'>
					{type === 'sourse' && <li className='language-item'><button className='language-btn'>Detect Language</button></li>}
					<li className='language-item'><button className='language-btn active'>English</button></li>
					<li className='language-item'><button className='language-btn'>French</button></li>
					<li className='language-item'><button className='language-btn dropdown-btn' ref={buttonRef}>Spanish</button></li>
				</ul>
				<ul ref={listRef} className='dropdown-list'>
					<li className='dropdown-input'><input className='filter-input' placeholder='Find language' type="text" name="" id="" /></li>
					<li className='dropdown-items'><ul className='dropdown-languages'>
						{languages.map((language) => (
							<li className='dropdown-item' key={language.id}>{language.language}</li>
						))}
					</ul></li>
				</ul>
				{type === 'target' && <button className='option-btn reverse-btn'></button>}
			</div>
		</>
	)
}