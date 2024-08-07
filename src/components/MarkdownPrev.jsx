import React, { Component } from 'react';
import { MarkedContext } from './MarkedContext';
import { ThemeContext } from './ThemeContext';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import 'highlight.js/styles/arta.css'; // Import the CSS style
import { MathJax } from 'better-react-mathjax';

const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang, info) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	})
);

class MarkdownPrev extends Component {
	static contextType = MarkedContext;
	constructor(props) {
		super(props);
		this.prevRef = React.createRef(null);
	}

	componentDidUpdate() {
		let { markdown } = this.context;
		this.prevRef.current.innerHTML = marked.parse(markdown);
	}

	componentDidMount() {
		let { markdown } = this.context;
		this.prevRef.current.innerHTML = marked.parse(markdown);
	}
	render() {
		return (
			<ThemeContext.Consumer>
				{(Theme) => (
					<MathJax className='MardownPrev'>
						<div
							className={`MardownPrevSpace ${Theme.theme}`}
							ref={this.prevRef}
						></div>
					</MathJax>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default MarkdownPrev;
