import React, { useEffect, useState } from "react";
import "./game.css";

function Game() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(-1);
  const [wrongIndex, setWrongIndex] = useState(-1); 

  const totalBoxes = Array.from({ length: 9 }, (_, index) => index);

  useEffect(() => {
    const setKeyword = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * totalBoxes.length);
      setCurrent(randomIndex);
    
      setTimeout(() => {
        setCurrent(-1);
      }, 1000);
    }, 1100);

    const stopGame = setTimeout(() => {
      clearInterval(setKeyword);
      alert(`Game Over! Your Final Score is ${score}`);
    }, 60000);

    return () => {
      clearTimeout(stopGame);
      clearInterval(setKeyword);
    };
  }, [score, totalBoxes.length]);

  const calculateScore = (index) => {
    if (index === current) {
      setScore(score + 5);
      
    } else {
      setScore(score - 2.5);
      setWrongIndex(index); 
      setTimeout(() => setWrongIndex(-1), 500); 
    }
  };

  return (
    <div className="game-board">
      <h1>HIT GAME</h1>
      <div className="game">
        <div className="board">
          {totalBoxes.map((val, index) => {
            return (
              <div
                key={index}
                className={`box ${
                  index === current
                    ? "active"
                    : index === wrongIndex
                    ? "wrong"
                    : ""
                }`} 
                onClick={() => calculateScore(index)}
              >
                {index === current ? "HIT" : " "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="score-card">Score : {score}</div>
    </div>
  );
}

export default Game;
