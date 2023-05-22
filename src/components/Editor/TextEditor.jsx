import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "./styles.css";

export const TextEditor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div style={{display: "flex", flexDirection: 'column' ,alignItems: 'center'}} className="text-editor">
      <EditorToolbar />
      <ReactQuill
        style={{width: '50%' , height: 1000, marginBottom: 20}}
        theme="snow"
        value={state.value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
      
    </div>
  );
};

export default TextEditor;
