import React from 'react';
import './App.css';
import TicTacToeGame from './TicTacToeGame';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TicTacToeGame
          classes={classes}
        />
      </div>
    );
  }
}
const classes = {
  tictactoe: {
    gameContainer: "gameContainer",
    header:"header",
    resetButton: "resetButton",
    turnLabel:"turnLabel",
    turnImg:"turnImg",
    board: "board",
    row: "row",
    boardspace: "space",
  }
}
export default App;
