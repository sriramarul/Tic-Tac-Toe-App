import React, { useState } from 'react';
import { calculateWinner } from '../calculate';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const result = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (result || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button className="button" onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>

    )

    return (
        <><div className="tic-tac-toe-style">
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p style={{ textAlign: 'center', fontSize: 20 }}>{result == "Draw" ? "Match draw" : result ? 'Winner: ' + result : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div></div>
        </>
    )
}

export default Game;