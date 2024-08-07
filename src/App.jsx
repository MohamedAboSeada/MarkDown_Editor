import React, { Component } from 'react';
import ThemeCont from './components/ThemeContext';
import MarkedCont from './components/MarkedContext';
import MarkdownEditor from './components/Editor';
import MarkdownPrev from './components/MarkdownPrev';
import Nav from './components/nav';
import './App.css';
import { MathJaxContext } from 'better-react-mathjax';

class App extends Component {
	render() {
		return (
			<>
				<ThemeCont>
					<Nav></Nav>
					<div className='editor'>
						<MarkedCont>
							<MarkdownEditor />
							<MathJaxContext>
								<MarkdownPrev />
							</MathJaxContext>
						</MarkedCont>
					</div>
				</ThemeCont>
			</>
		);
	}
}

export default App;
