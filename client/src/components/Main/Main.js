import React, { useState } from 'react';
import './Main.css';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const askedQuestion = [];

const Main = ({ questions }) => {
  const [randomQuestion, setRandomQuestion] = useState('Готов к вопросам?');

  const getRandomIndex = (questionsList, askedQuestions) => {
    let questionId =
      questionsList[Math.floor(Math.random() * (questionsList.length - 0))]._id;
    if (questionsList.length <= askedQuestions.length) {
      return null;
    }
    if (askedQuestions.includes(questionId)) {
      return getRandomIndex(questionsList, askedQuestions);
    }
    return questionId;
  };

  const handleClick = () => {
    const uniqueId = getRandomIndex(questions, askedQuestion);

    if (!uniqueId) {
      return setRandomQuestion('Ты ответил на все вопросы!');
    }

    askedQuestion.push(uniqueId);
    setRandomQuestion(
      questions.find((question) => question._id === uniqueId).body
    );
  };

  return (
    <div className='Main'>
      <Button onClick={handleClick} variant='outlined' color='primary'>
        Get random question
      </Button>
      <Chip label={randomQuestion} />
    </div>
  );
};

export default Main;
