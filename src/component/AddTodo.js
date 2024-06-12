import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const [precondition, setPrecondition] = useState("");
  const [acceptenceCriteria, setAcceptenceCriteria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      addTodo({ content, precondition, acceptenceCriteria }, new Date());
      setContent("")
      setPrecondition("")
      setAcceptenceCriteria("")
    }
  };

  return (
    // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
    // one div element.
    // 2. The return statement should include a text field input with the handleChange function from above that
    // is passed into an onChange event.
    // 3. The return should also include a button with the handleSubmit function from above that is passed into
    // an OnClick event.
    // 4. The value of the text field also should reflect the local state of this component.
    <div style={{ display: "flex", gap: 8, flexDirection: "column", flexBasis: "400px", width: "20%", margin: "auto" }}>
      <TextField
        label="New Task Description"
        variant="outlined"
        onChange={event => setContent(event.target.value)}
        value={content}
        data-testid="new-item-textfield"
      />
      <TextField
        label="Task Pre-Conditions"
        variant="outlined"
        onChange={event => setPrecondition(event.target.value)}
        value={precondition}
      />
      <TextField
        label="Task Acceptence Criteria"
        variant="outlined"
        onChange={event => setAcceptenceCriteria(event.target.value)}
        value={acceptenceCriteria}
      />
      <Button
        style={{ marginLeft: "10px" }}
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        data-testid="new-item-button"
      >
        Add
      </Button>
    </div>
  );
}

export default AddTodo;
