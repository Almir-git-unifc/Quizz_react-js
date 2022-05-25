import React, { useState } from "react";
import QuestionsList from "./components/QuestionsList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app-wrapper">
      {showScore ? (
        <div>
          <div className="completed">Fim do Jogo!</div>
          <div className="score-section">
            Pontuação: {score}/{QuestionsList.length}
          </div>
        </div>
      ) : (
        <div>
          <div className="question-section-wrapper">
            <div className="question-count">
              Questão {currentQuestion + 1} of {QuestionsList.length}
            </div>
            <div className="question">
              {QuestionsList[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section-wrapper">
            {QuestionsList[currentQuestion].answersList.map((answerOption) => (
              <li className="answer-list" key={uuidv4()}>
                <button
                  className={`answer-button ${
                    clicked && answerOption.isCorrect ? "correct" : "" 
                  }`}
                  onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
                >
                  {answerOption.answer}
                </button>
              </li>
            ))}
          </div>
          <div>
            <button className="next-button" onClick={handleNextQuestion}>
              Próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
