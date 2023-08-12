import React, { useContext, useState } from 'react';
import { LightContext } from '../wraper/props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './recorder.scss';

let count = 1;
let position = 1;

export default function Recorder({ pieces, history, nextPosition, opponent, setPiece, isMatch }) {

    const { recordMoves, setRecordMoves } = useContext(LightContext);
    const [last, setLast] = useState([]);

    function moveBack() {

        if (recordMoves.length === 0) return;

        const lastMove = recordMoves[recordMoves.length - 1];
        
        setRecordMoves(prevMoves => prevMoves.slice(0, -1));
        setLast(prevLast => [...prevLast, lastMove]);
        
        const prepos = history[history.length - count];
        const nextpos = nextPosition[nextPosition.length - count];
        
        const lastIndx = isMatch[isMatch.length - count];

        if (lastIndx === "1") {

            setPiece((w) => {
                const len = opponent.length;
                return [
                    ...w, 
                    opponent[len - position]
                ]
            });
            position += 1;
        }

        pieces.map((t) => {

            if (t.x === nextpos.x && t.y === nextpos.y) {
                t.x = prepos.gx;
                t.y = prepos.gy;
            }

            return t;
        });

        count += 1;
    }

    function moveForward() {

        if (last.length === 0) return;
        
        count -= 1;
        const nextMove = last[last.length - 1];

        setLast(prevLast => prevLast.slice(0, -1));
        setRecordMoves(prevMoves => [...prevMoves, nextMove]);

        const prepos = history[history.length - count];
        const nextpos = nextPosition[nextPosition.length - count];

        pieces.map((t) => {

            if (t.x === prepos.gx && t.y === prepos.gy) {
                t.x = nextpos.x;
                t.y = nextpos.y;
            } 
            return t;
        });
    }

    const imgStyle = {
        width: "30px",
        height: "30px",
    };

    const h1Style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px"
    };

    return (
        <div className='record-container'>
            <h2 style={h1Style}>
                <img src='./knight.png' style={imgStyle} />
                <span>Record moves</span>
            </h2>
            <div className='record-moves'>
                {recordMoves}
            </div>
            <div className='btns-record-moves'>
                <button className='record-left' 
                    onClick={moveBack}
                >
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        id='arrow-left'
                    />
                </button>
                <button className='record-right' 
                    onClick={moveForward}
                >
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        id='arrow-right'
                    />
                </button>
            </div>
            <div className='foot-record-moves'>
                <img src='./crown.png' style={imgStyle} />
                <span>One Game, let's play!</span>
            </div>
        </div>
    );
}