import React from "react";

const MainWindow = (props) => {
  const tempPlayerBoard = "";
  const moves = props.moves;
  if (!props.playerBoard[0][0]) return <p>loading</p>;
  const test = props.playerBoard[0][0];
  console.log(test);

  return <div>rest</div>;
  return (
    <div className="main-window">
      <div className="main-window__player-board">
        <div className="main-window__column-2">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column1 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column1 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column1 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column1 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column1 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column1 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column1 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column1 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column1 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column1 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column3 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column1 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column1 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column1 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column1 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-3">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column2 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column2 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column2 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column2 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column2 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column2 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column2 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column2 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column2 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column2 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column2 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column2 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column2 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column2 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column2 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column2 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column2 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column2 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column2 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column2 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-4">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column3 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column3 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column3 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column3 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column3 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column3 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column3 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column3 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column3 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column3 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column3 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column3 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column3 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column3 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column3 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column3 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column3 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column3 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column3 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column3 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column3 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column3 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column3 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column3 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column3 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-5">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column4 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column4 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column4 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column4 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column4 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-6">
            {props.playerBoard[0].column4 === 6 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column4 === 6 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column4 === 6 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column4 === 6 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column4 === 6 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-6">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column5 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column5 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column5 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column5 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column5 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-6">
            {props.playerBoard.column5 === 6 ? (
              <div className="mai[0]n-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 6 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 6 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 6 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 6 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-7">
            {props.playerBoard[0].column5 === 7 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 7 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 7 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 7 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 7 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-8">
            {props.playerBoard[0].column5 === 8 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column5 === 8 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column5 === 8 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column5 === 8 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column5 === 8 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-7">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column6 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column6 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column6 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column6 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column6 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-6">
            {props.playerBoard[0].column6 === 6 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 6 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 6 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 6 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 6 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-7">
            {props.playerBoard[0].column6 === 7 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 7 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 7 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 7 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 7 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-8">
            {props.playerBoard[0].column6 === 8 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column6 === 8 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column6 === 8 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column6 === 8 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column6 === 8 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-8">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column7 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column7 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column7 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column7 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column7 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-6">
            {props.playerBoard[0].column7 === 6 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 6 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 6 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 6 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 6 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-7">
            {props.playerBoard[0].column7 === 7 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column7 === 7 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column7 === 7 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column7 === 7 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column7 === 7 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-9">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column8 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column8 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column8 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column8 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column8 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-6">
            {props.playerBoard[0].column8 === 6 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column8 === 6 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column8 === 6 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column8 === 6 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column8 === 6 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-10">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column9 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column9 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column9 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column9 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column9 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column9 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column9 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column9 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column9 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column9 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column9 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column9 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column9 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column9 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column9 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column9 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column9 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column9 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column9 === 4 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column9 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-5">
            {props.playerBoard[0].column9 === 5 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column9 === 5 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column9 === 5 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column9 === 5 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column9 === 5 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-11">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column10 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column10 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column10 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column10 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column10 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column10 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column10 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column10 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column10 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column10 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column10 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column10 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column10 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column10 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column10 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-4">
            {props.playerBoard[0].column10 === 4 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column10 === 4 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column10 === 4 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column10 === 4 ? (
              <div className="main-window__ploayer4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column10 === 4 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
        <div className="main-window__column-12">
          <div className="main-window__pos-1">
            {props.playerBoard[0].column11 === 1 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column11 === 1 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column11 === 1 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column11 === 1 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column11 === 1 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-2">
            {props.playerBoard[0].column11 === 2 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column11 === 2 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column11 === 2 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column11 === 2 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column11 === 2 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
          <div className="main-window__pos-3">
            {props.playerBoard[0].column11 === 3 ? (
              <div className="main-window__player1"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[1].column11 === 3 ? (
              <div className="main-window__player2"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[2].column11 === 3 ? (
              <div className="main-window__player3"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {props.playerBoard[3].column11 === 3 ? (
              <div className="main-window__player4"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
            {tempPlayerBoard.column11 === 3 ? (
              <div className="main-window__temp"></div>
            ) : (
              <div className="main-window__empty"></div>
            )}
          </div>
        </div>
      </div>
      <div className="main-window__dice-container">
        <div className="main-window__dice-set">
          <div className="main-window__dice-all">
            {props.setDiceArray[0].se1 && props.setDiceArray[0].set2 ? (
              <button
                className="main-window__dice-selection"
                onClick={() => {
                  props.setMoves([
                    ...moves,
                    props.setDiceArray[0].dice.set1,
                    props.setDiceArray[0].dice.set2,
                  ]);
                }}
              >
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set2}
                </div>
              </button>
            ) : null}
            {props.setDiceArray[0].set1 && !props.setDiceArray[0].set2 ? (
              <>
                <button
                  className="main-window__dice-selection"
                  onClick={() => {
                    props.setMoves([...moves, props.setDiceArray[0].dice.set1]);
                  }}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[0].dice.set1}
                  </div>
                </button>
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[0].set1 && !props.setDiceArray[0].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[0].set1 && props.setDiceArray[0].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[0].dice.set1}
                </div>
                <button
                  className="main-window__dice-selection"
                  onClick={() => {
                    props.setMoves([...moves, props.setDiceArray[0].dice.set2]);
                  }}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[0].dice.set2}
                  </div>
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="main-window__dice-set">
          <div className="main-window__dice-all">
            {props.setDiceArray[1].se1 && props.setDiceArray[1].set2 ? (
              <button
                className="main-window__dice-selection"
                onClick={() => {
                  props.setMoves([
                    ...moves,
                    props.setDiceArray[1].dice.set1,
                    props.setDiceArray[1].dice.set2,
                  ]);
                }}
              >
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set2}
                </div>
              </button>
            ) : null}
            {props.setDiceArray[1].set1 && !props.setDiceArray[1].set2 ? (
              <>
                <button
                  className="main-window__dice-selection"
                  onClick={props.setMoves([
                    ...moves,
                    props.setDiceArray[1].dice.set1,
                  ])}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[1].dice.set1}
                  </div>
                </button>
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[1].set1 && !props.setDiceArray[1].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[1].set1 && props.setDiceArray[1].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[1].dice.set1}
                </div>
                <button
                  className="main-window__dice-selection"
                  onClick={props.setMoves([
                    ...moves,
                    props.setDiceArray[1].dice.set2,
                  ])}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[1].dice.set2}
                  </div>
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="main-window__dice-set">
          <div className="main-window__dice-all">
            {props.setDiceArray[2].se1 && props.setDiceArray[2].set2 ? (
              <button
                className="main-window__dice-selection"
                onClick={props.setMoves([
                  ...moves,
                  props.setDiceArray[2].dice.set1,
                  props.setDiceArray[2].dice.set2,
                ])}
              >
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set2}
                </div>
              </button>
            ) : null}
            {props.setDiceArray[2].set1 && !props.setDiceArray[2].set2 ? (
              <>
                <button
                  className="main-window__dice-selection"
                  onClick={props.setMoves([
                    ...moves,
                    props.setDiceArray[2].dice.set1,
                  ])}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[2].dice.set1}
                  </div>
                </button>
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[2].set1 && !props.setDiceArray[2].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set1}
                </div>
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set2}
                </div>
              </>
            ) : null}
            {!props.setDiceArray[2].set1 && props.setDiceArray[2].set2 ? (
              <>
                <div className="main_window__die">
                  {props.setDiceArray[2].dice.set1}
                </div>
                <button
                  className="main-window__dice-selection"
                  onClick={props.setMoves([
                    ...moves,
                    props.setDiceArray[2].dice.set2,
                  ])}
                >
                  <div className="main_window__die">
                    {props.setDiceArray[2].dice.set2}
                  </div>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
