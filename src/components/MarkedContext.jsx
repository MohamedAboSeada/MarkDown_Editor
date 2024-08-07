import React, { Component } from 'react';

let MarkedContext = React.createContext('');

class MarkedCont extends Component {
	constructor(props) {
		super(props);

		this.state = {
			markdown: '# Hello World!',
		};
	}

	changeMarkdown = (e) => {
		this.setState({
			markdown: e,
		});
	};

	render() {
		let { markdown } = this.state;
		return (
			<MarkedContext.Provider
				value={{
					markdown: markdown,
					onchangeMarkdown: this.changeMarkdown,
				}}
			>
				{this.props.children}
			</MarkedContext.Provider>
		);
	}
}

export default MarkedCont;
export { MarkedContext };
