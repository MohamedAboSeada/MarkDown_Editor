import React, { Component } from 'react';

let ThemeContext = React.createContext('light');

class ThemeCont extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: 'light',
		};
	}

	changeTheme = () => {
		this.setState((prevState) => ({
			theme: prevState.theme === 'light' ? 'dark' : 'light',
		}));
	};

	render() {
		return (
			<ThemeContext.Provider
				value={{
					theme: this.state.theme,
					onchangeTheme: this.changeTheme,
				}}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeCont;
export { ThemeContext };
