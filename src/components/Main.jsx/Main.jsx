// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Main.css';
import { marked } from 'marked';

const defaultText = `
# Heading 1
## Heading 2
[Link to Google](https://www.google.com)

Inline code: \`console.log("Hello, World!")\`

\`\`\`
const codeBlock = () => {
  console.log("This is a code block");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Image](https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg)

**Bold Text**`;

const Main = () => {
  const [markdown, setMarkdown] = useState(defaultText.trim());

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  marked.setOptions({
    breaks: true,
    gfm: true
  });

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="title-col">
                    <p>EDITOR</p>
                </div>
                <textarea
                id="editor"
                className="editor"
                value={markdown}
                onChange={handleEditorChange}
                rows="20"
            />
            </div>
            <div className="col">
                <div className="title-col">
                    <p>PREVIEWER</p>
                </div>
                <div
                id="preview"
                className="preview"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
        </div>
      </div>
    </div>
  );
};

export default Main;