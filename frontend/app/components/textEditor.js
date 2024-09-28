// TextEditor.js
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


const TextEditor = (props) => {
 
  const { onChange, value } = props;



  return (
  <AceEditor
  className="bg-secondary-blue text-white"
  placeholder=""
  mode="markdown"
  style={{
    ".aceTm .ace_gutter": {
      backgroundColor: "#000C1D",
    },
  }}
  name="blah2"
  width="100%"
  onChange={onChange}
  fontSize={14}
  showPrintMargin={false}
  showGutter={true}
  highlightActiveLine={true}
  value={value}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  wrap: true,
  }}/>
    
  );
};

export default TextEditor;

