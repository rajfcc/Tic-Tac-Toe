import { useState } from "react";
import Squares from "./Squares";

function Board() {
  const [player, setPlayer] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let condition of winCondition){
      const [a, b, c] = condition;
      if (
        player[a] !== null &&
        player[a] === player[b] &&
        player[a] === player[c]
      ) {
        return player[a];
      }
      return false;
    }
  };
  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (player[index] !== null) {
        return;
      }
    const copyPlayer = [...player];
    
    isXTurn ? (copyPlayer[index] = "X") : (copyPlayer[index] = "O");
    setPlayer(copyPlayer);
    setXTurn(!isXTurn);
  };

  const handleReset = () =>{
    setPlayer(Array(9).fill(null))
  }

  return (
    <>
    {isWinner ? (<div>{isWinner} won the  game
    <div>
        <button className="btn btn-outline" onClick={handleReset}>Play Again</button>
    </div>
    
    </div>):(
      <div>
        <div className="flex justify-center items-center">
          <Squares
            value={player[0]}
            onClick={() => {
              handleClick(0);
            }}
          />
          <Squares
            value={player[1]}
            onClick={() => {
              handleClick(1);
            }}
          />
          <Squares
            value={player[2]}
            onClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="flex ">
          <Squares
            value={player[3]}
            onClick={() => {
              handleClick(3);
            }}
          />
          <Squares
            value={player[4]}
            onClick={() => {
              handleClick(4);
            }}
          />
          <Squares
            value={player[5]}
            onClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="flex ">
          <Squares
            value={player[6]}
            onClick={() => {
              handleClick(6);
            }}
          />
          <Squares
            value={player[7]}
            onClick={() => {
              handleClick(7);
            }}
          />
          <Squares
            value={player[8]}
            onClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
      )
      }

    </>
  );
}

export default Board;
