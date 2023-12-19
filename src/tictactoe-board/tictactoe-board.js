import { useState } from "react";
import { TicTacToeGame } from "../tictactoe-game/tictactoe-game";
import TicTacToeSpace from "../tictactoe-space/tictactoe-space";

export default function TicTacToeBoard() {
    const [game, setGame] = useState({
        board: Array(9).fill(''),
        winner: '',
        turn: 'x'
    })

    function reset() {
        setGame({
            board: Array(9).fill(''),
            winner: '',
            turn: 'x'
        })
    }

    function onClickSpace(spaceIndex) {
        const result = TicTacToeGame.onClick(game, spaceIndex);
        setGame(result);
    }

    //Generate the board display elements
    let boardElement = [];
    for (const spaceIndex in game.board) {
        const spaceValue = game.board[spaceIndex];

        boardElement.push(
            <TicTacToeSpace
                key={spaceIndex}
                value={spaceValue}
                index={spaceIndex}
                onClick={onClickSpace}
            ></TicTacToeSpace>
        )
    }

    return (
        <div>
            <div className="tictactoe-board">{boardElement}</div>
            <p>Winner: {game.winner}</p>
            <p>Turn: {game.turn}</p>
        </div>
    )
}