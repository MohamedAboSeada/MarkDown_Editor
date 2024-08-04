import React, { Component } from 'react';
import './navStyle.css';
import { ThemeContext } from './ThemeContext';
import { Moon, Sun } from 'react-feather';

class Nav extends Component {
	static contextType = ThemeContext;
	render() {
		let { theme, onchangeTheme } = this.context;
		return (
			<nav className={`nav ${theme}`}>
				<div className='logo'>MarkDownEditor</div>
				<button onClick={onchangeTheme} className='themeBtn'>
					{theme === 'light' ? <Moon /> : <Sun />}
				</button>
			</nav>
		);
	}
}

export default Nav;
