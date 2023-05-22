import React from "react";
import { Quill } from "react-quill";
import { BiRedo, BiUndo } from "react-icons/bi";
import { GiHighlighter } from "react-icons/gi";
import "./style.css";

const CustomUndo = () => (
  <BiUndo
    className="ql-stroke ql-fill"
    points="6 10 4 12 2 10 6 10"
    d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
  />
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <BiRedo
    className="ql-fill ql-stroke"
    points="12 10 14 12 16 10 12 10"
    d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
  />
);

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const Size = Quill.import("attributors/style/size");
Size.whitelist = [
  "8px",
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "24px",
  "30px",
  "38px",
  "46px",
  "60px",
  "72px",
  "98px",
];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "timesnewroman",
  "serif",
  "roboto",
  "georgia",
  "helvetica",
  "monospace",
  "comic-sans",
  "courier-new", 
  "lucida"
];
Quill.register(Font, true);

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
    Size: [
      "8px",
      "9px",
      "10px",
      "11px",
      "12px",
      "14px",
      "16px",
      "18px",
      "24px",
      "30px",
      "38px",
      "46px",
      "60px",
      "72px",
      "98px",
    ],
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div
    style={{
      backgroundColor: "#edf2fa",
      borderRadius: 100,
      margin: 30,
      display: "flex",
      justifyContent: "space-evenly",
    }}
    id="toolbar"
  >
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
    <span className="ql-formats">
      <select className="ql-header" defaultValue="6">
        <option value="0">Normal</option>
        <option value="1">Title</option>
        <option value="3">Subtitle</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
      </select>
    </span>
    <span className="ql-formats">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      
      <option value="timesnewroman">Times New Roman</option>
      <option value="serif">Sans Serif</option>
      <option value="georgia">Georgia</option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="monospace">Monospace</option>
      <option value="lucida">Lucida</option>
      <option value="roboto">Roboto</option>
    </select>
    </span>
    <span className="ql-formats">
      <select className="ql-size" defaultValue="12px">
      <option value="8px">8</option>
      <option value="9px">9</option>
      <option value="10x">10</option>
      <option value="11px">11</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="24px">24</option>
        <option value="30px">30</option>
        <option value="38px">38</option>
        <option value="46px">46</option>
        <option value="60px">60</option>
        <option value="72px">72</option>
        <option value="98px">98</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <select className="ql-color" />
      <select className="ql-background" children={<GiHighlighter />}></select>

      {/* <button className="ql-strike" /> */}
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <button className="ql-list" value="bullet" />
      <button className="ql-list" value="ordered" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;
