import { useState } from "react";
import { marked } from "marked";

function MarkdownPreviewer() {

  marked.setOptions({
    breaks: true,
  })
  const initialMarkdown =
    "# Welcome to my Markdown Previewer\n\n" +
    "## By OB\n\n" +
    "Here is a link to my [github](https://www.github.com/OB-Adams).\n\n" +
    "Here is some `inline code` within a sentence.\n\n" +
    "Below is a code block:\n\n" +
    "```javascript\n" +
    "const greet = () => {\n" +
    '  console.log("Hello, World!");\n' +
    "};\n" +
    "greet();\n" +
    "```\n\n" +
    "- This is a list item\n\n" +
    "> This is a blockquote\n\n" +
    "![OpenAI Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png)\n\n" +
    "Here is some **bolded text.**\n";

  const [markdown, setMarkdown] = useState(initialMarkdown);
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <div className="editor-wrapper">
        <div className="editor-bar">Editor</div>
        <textarea
          id="editor"
          onChange={handleChange}
          value={markdown}
        ></textarea>
      </div>
      <div className="preview-wrapper">
        <div className="preview-bar">Preview</div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        ></div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;