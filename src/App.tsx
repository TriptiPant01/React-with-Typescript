import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

import QuestionCard from "./components/QuestionsCard";

//styles
import { GlobalStyle, Wrapper } from "./App.styles";
//types
const total_questions = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  corectAnswer: string;
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(total_questions, Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      total_questions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prex) => prex + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        corectAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === total_questions) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {(gameOver || userAnswers.length === total_questions) && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}

        {!gameOver && <p className="score">Score:{score}</p>}
        {loading && <p>Loading Question:</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={total_questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && number >= 0 && !loading && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
      </Wrapper>
    </>
  );
};

export default App;
