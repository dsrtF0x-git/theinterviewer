import React, { useState } from 'react';
import "./AddQuestion.css";
import axios from "axios";
import { TextField, MenuItem, FormControl, Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const genres = [
  {
    value: "vdud",
    label: "Вопросы от Дудя"
  },
  {
    value: "insomnia",
    label: "То, что не дает уснуть по ночам"
  }
]

const AddQuestion = () => {

  const [questionGenre, setQuestionGenre] = useState("vdud");

  const [question, setQuestion] = useState("");

  const handleQuestionChange = event => {
    setQuestion(event.target.value);
  }

  const handleGenreChange = event => {
    setQuestionGenre(event.target.value);
  };

  const submitQuestion = () => {
    fetch("http://localhost:5000/add-question", {
      body: JSON.stringify({ question, questionGenre}),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => console.log(question));
    setQuestion("");
  };

  return (
    <div className="AddQuestion">
      <FormControl id="question-group">
        <TextField onChange={handleQuestionChange} value={question} id="question-input" label="Filled" variant="filled" />
        <TextField
          id="question-genre"
          select
          value={questionGenre}
          onChange={handleGenreChange}
        >
          {genres.map(question => {
            return (
              <MenuItem fullWidth={true} key={question.value} value={question.value}>
                {question.label}
              </MenuItem>
            )
          })}
        </TextField>
      </FormControl>
      <Button
        id="submit-question"
        variant="contained"
        color="default"
        onClick={submitQuestion}
        startIcon={<CloudUploadIcon />}
      >
        Send
      </Button>
    </div>

  );
}

export default AddQuestion;
