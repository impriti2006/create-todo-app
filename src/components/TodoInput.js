import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handelEnterPrass = (e) => {
    if(e.keyCode === 13) {
        props.addList(inputText)
        setInputText("")
    }
  }

  return (
    <div className="input-container">

      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your List"
        value={inputText}
        onChange={e => {
            setInputText(e.target.value)
        }}
        onKeyDown = {handelEnterPrass}
      />
      <button className="add-btn"
      onClick={() => 
      {props.addList(inputText)
        setInputText("")
      }}>Add</button>

    </div>

  );
};

export default TodoInput;
