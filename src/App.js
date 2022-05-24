import React, { useState } from "react";
import QuestionsList from "./components/QuestionsList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="app-wrapper">
      <div>
        <div className="question-section-wrapper">
          <div className="question-count">
            Question{currentQuestion + 1} of {QuestionsList.length}
          </div>
          <div className="question">
            {QuestionsList[currentQuestion].question}
          </div>
        </div>

        <div className="answer-section-wrapper">
          {QuestionsList[currentQuestion].answersList.map((answerOption) => (
            <li className="answer-list" key={uuidv4()}>
              <button className="answer-button">{answerOption.answer}</button>
            </li>
          ))}
        </div>
      </div>
      <button className="next-button">Next</button>
      <div></div>
    </div>
  );
};

export default App;
