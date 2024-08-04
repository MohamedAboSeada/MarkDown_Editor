import React, { Component, createRef } from 'react';
import { ThemeContext } from './ThemeContext';
import { MarkedContext } from './MarkedContext';

class MarkdownEditor extends Component {
	constructor(props) {
		super(props);

		this.textArea = createRef(null);
	}

	HandleKeyDown = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			const textarea = event.target;
			const start = textarea.selectionStart;
			const end = textarea.selectionEnd;

			// Set textarea value to: text before caret + tab + text after caret
			textarea.value =
				textarea.value.substring(0, start) +
				'\t' +
				textarea.value.substring(end);

			// Put caret at the right position again
			textarea.selectionStart = textarea.selectionEnd = start + 1;
		}
	};

	componentDidMount() {
		this.textArea.current.focus();
	}

	render() {
		return (
			<MarkedContext.Consumer>
				{(MarkDown) => (
					<ThemeContext.Consumer>
						{(Theme) => (
							<textarea
								ref={this.textArea}
								className={`${Theme.theme}`}
								onKeyDown={this.HandleKeyDown}
								value={MarkDown.markdown}
								onChange={MarkDown.onchangeMarkdown}
							></textarea>
						)}
					</ThemeContext.Consumer>
				)}
			</MarkedContext.Consumer>
		);
	}
}

export default MarkdownEditor;
