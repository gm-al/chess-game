
import React from "react";
import ChessBoard from './Component/chessBoard';
import './Component/sass/boardStyle.scss';
import './App.scss';

function App() {
    
    return (
        <div className="app">
            <ChessBoard />
        </div>
    );
}

export default App;