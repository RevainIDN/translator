import { use } from 'react';
import '../styles/LanguageSelector.css'
import { useState, useEffect, useRef } from 'react'

export default function LanguageSelector({ type, languages, selectedLanguage, setSelecteedLanguage, handleLanguageChange }) {
	const [filteredText, setFilteredText] = useState('');
	const [activeLanguage, setActiveLanguage] = useState(type === 'sourse' ? 'en' : 'fr');

	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);
	const listRef = useRef(null);

	const handleClick = () => {
		listRef.current.classList.toggle('dropdown-list--visible');
	};

	const handleFilter = (event) => {
		const value = event.target.value;

		setFilteredText(value)
	}

	const handleButtonClick = (buttonId, languageCode, type) => {
		setActiveLanguage(buttonId);
		handleLanguageChange(languageCode, type);
	};

	const filteredLanguages = languages.filter(language => {
		return language.language.toLowerCase().includes(filteredText.toLowerCase())
	})

	useEffect(
		() => {
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

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target) &&
				listRef.current.classList.contains('dropdown-list--visible')
			) {
				listRef.current.classList.remove('dropdown-list--visible');
			}
		};

		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<div ref={dropdownRef} className='language-selector'>
				<ul className='language-list'>
					{type === 'sourse' && <li className='language-btn'><button className={`language-btn ${activeLanguage === 'auto' ? 'active' : ''}`} onClick={() => handleButtonClick('auto', 'auto', type)}>Detect Language</button></li>}
					<li className='language-item'><button className={`language-btn ${activeLanguage === 'en' ? 'active' : ''}`} onClick={() => handleButtonClick('en', 'en', type)}>English</button></li>
					<li className='language-item'><button className={`language-btn ${activeLanguage === 'fr' ? 'active' : ''}`} onClick={() => handleButtonClick('fr', 'fr', type)}>French</button></li>
					<li className='language-item'><button className='language-btn dropdown-btn' ref={buttonRef}>{languages.find(language => language.code === selectedLanguage)?.language}</button></li>
				</ul>
				<ul ref={listRef} className='dropdown-list'>
					<li className='dropdown-input'><input className='filter-input' placeholder='Find language' onChange={handleFilter} type="text" /></li>
					<li className='dropdown-items'><ul className='dropdown-languages'>
						{filteredLanguages.length > 0
							? filteredLanguages.slice(0, languages.length - 1).map((language) => (
								<li className='dropdown-item' key={language.id} onClick={() => handleLanguageChange(language.code, type)}>{language.language}</li>
							))
							: languages.slice(0, languages.length - 1).map((language) => (
								<li className='dropdown-item' key={language.id} onClick={() => handleLanguageChange(language.code, type)}>{language.language}</li>
							))}

					</ul></li>
				</ul>
				{type === 'target' && <button className='option-btn reverse-btn'></button>}
			</div>
		</>
	)
}