import React, { Component } from 'react';

let MarkedContext = React.createContext('');
let markdownContent = `# Markdown Editor
---
## Overview

This Markdown Editor leverages Ace Editor for text editing, supports syntax highlighting using Highlight.js (hljs), and integrates MathJax for rendering LaTeX. It is designed to provide a seamless and powerful editing experience for users who need to create and preview markdown documents with advanced features.

## Features

- **Ace Editor Integration**: A powerful, customizable, and feature-rich text editor.
- **Syntax Highlighting**: Real-time code highlighting using Highlight.js.
- **LaTeX Support**: Render LaTeX equations seamlessly using MathJax.
- **Live Preview**: Instantly preview markdown changes.
- **Extensible**: Easily add new features and customizations.

## Usage 
--- 
### Live Preview

- The preview pane on the right updates in real-time as you type.

### Basic Editing
---
- Open the editor and start typing your markdown content.
- Use standard markdown syntax for formatting.


### Code Highlighting
---
- Write your code blocks using standard markdown syntax.
- The code will be highlighted automatically in the preview.

    
\`\`\`javascript
console.log('Hello, world!');
\`\`\`
    

### LaTeX Support
---
- Use \\\\(Math Here \\\\) for block LaTeX or  for inline LaTeX.
- The equations will be rendered in the preview.

## \\\\( E = mc^2 \\\\)

### Future Features
1. [ ] *document preview pdf save*
2. [ ] *add editor options tab*
`;

class MarkedCont extends Component {
	constructor(props) {
		super(props);

		this.state = {
			markdown: markdownContent,
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
