import React, { Component, createRef } from 'react';
import { ThemeContext } from './ThemeContext';
import { MarkedContext } from './MarkedContext';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard';
import 'ace-builds/src-noconflict/theme-gruvbox_light_hard';
import 'ace-builds/src-noconflict/ext-language_tools';

const codeEditorStyle = {
	height: '100%',
	width: '40%',
};

class MarkdownEditor extends Component {
	render() {
		return (
			<MarkedContext.Consumer>
				{(MarkDown) => (
					<ThemeContext.Consumer>
						{(Theme) => (
							<>
								<AceEditor
									value={MarkDown.markdown}
									onChange={MarkDown.onchangeMarkdown}
									mode='markdown'
									fontSize={25}
									showGutter={true}
									style={codeEditorStyle}
									highlightActiveLine={false}
									theme={
										Theme.theme === 'dark'
											? 'gruvbox_dark_hard'
											: 'gruvbox_light_hard'
									}
									setOptions={{
										enableBasicAutocompletion: true,
										enableLiveAutocompletion: true,
										showLineNumbers: false,
										tabSize: 4,
									}}
									// onChange={MarkDown.onchangeMardown}
								/>
							</>
						)}
					</ThemeContext.Consumer>
				)}
			</MarkedContext.Consumer>
		);
	}
}

export default MarkdownEditor;
