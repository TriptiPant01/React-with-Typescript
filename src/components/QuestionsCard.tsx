import React from "react";

import { QuestionCardWrapper, QuestioonButtonWrapper } from "../App.styles";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <QuestionCardWrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <QuestioonButtonWrapper
          correct={userAnswer?.corectAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button
            disabled={userAnswer ? true : false}
            onClick={callback}
            value={answer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </QuestioonButtonWrapper>
      ))}
    </div>
  </QuestionCardWrapper>
);

export default QuestionCard;
