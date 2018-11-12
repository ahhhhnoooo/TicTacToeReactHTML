import React from 'react';
import TicTacToeGameBoardSpace from './TicTacToeGameBoardSpace';
import xsvg from './x.svg';
import osvg from './o.svg';

//Brute force check for winner
//TODO Maybe optimize?
function checkWinner(board) {
    //Rows
    if (board[0] && board[0] === board[1] && board[0] === board[2]) return board[0];
    if (board[3] && board[3] === board[4] && board[3] === board[5]) return board[3];
    if (board[6] && board[6] === board[7] && board[6] === board[8]) return board[6];
    //Cols
    if (board[0] && board[0] === board[3] && board[0] === board[6]) return board[0];
    if (board[1] && board[1] === board[4] && board[1] === board[7]) return board[1];
    if (board[2] && board[2] === board[5] && board[2] === board[8]) return board[2];
    //Diag
    if (board[0] && board[0] === board[4] && board[0] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[2] === board[6]) return board[2];

    return null;
}

class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //The player who's turn is next.  The next click will set their move and switch to the other player
            playerTurn: 'x',
            //Whether the game is running and moves are accepted
            active: true,
            //An array of chars 
            board: [],
            winner: null,
        }
    }

    onClickSpace = (spaceId) => {
        if (!this.state.active) return;
        this.setState((prevState, prevProps) => {
            let newBoard = prevState.board;
            newBoard[spaceId] = prevState.playerTurn;
            let winner = checkWinner(this.state.board);
            return {
                board: newBoard,
                //If there is a winner, it's their turn forever...
                playerTurn: winner ? winner : ((prevState.playerTurn === 'x') ? 'o' : 'x'),
                winner: winner,
                active: !winner
            }
        });
    }

    onClickReset = () => {
        this.setState({
            board: [],
            playerTurn: 'x',
            winner: null,
            active: true
        });
    }
    render() {
        const { classes } = this.props;

        //Create a set of rows, with 3 columns each
        let rows = [];
        for (let rowNum = 0; rowNum < 3; ++rowNum) {
            //The spaces are inside the row div
            let spaces = [];
            for (let colNum = 0; colNum < 3; ++colNum) {
                //id will be row * 3 + col
                //0     1     2
                //3     4     5
                //6     7     8
                let id = rowNum * 3 + colNum;
                spaces.push(
                    <TicTacToeGameBoardSpace
                        id={id}
                        key={id}
                        onClick={this.onClickSpace}
                        className={classes.tictactoe.boardspace}
                        value={this.state.board[id]}
                    />
                );
            }
            //Push the row div to the rows obj
            rows.push(
                <div className={classes.tictactoe.row} key={rowNum}>
                    {spaces}
                </div>
            );
        }
        let board = (
            <div className={classes.tictactoe.board}>
                {rows}
            </div>
        );
        let turnLabel = this.state.winner ? "Winner: " : "Turn: ";
        let turnImg = this.state.playerTurn === 'x' ? xsvg : osvg;
        let header = (
            <div className={classes.tictactoe.header}>
                <button onClick={this.onClickReset} className={classes.tictactoe.resetButton}>Reset</button>
                <p className={classes.tictactoe.turnLabel}>{turnLabel}</p>
                <img src={turnImg} className={classes.tictactoe.turnImg} />
            </div>
        );
        return (
            <div className={classes.tictactoe.gameContainer}>
                {header}
                {board}
            </div>
        );
    }
}

export default TicTacToeGame;