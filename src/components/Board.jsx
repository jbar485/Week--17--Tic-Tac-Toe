import React, { useState } from 'react';
import './Board.css';
import Markings from './Markings'
import { connect } from 'react-redux';


function Board(props) {

  const [turn, setTurn] = useState('X')

  const [swinner, setSwinner] = useState('')

  function onSquareClick(square){
    if (square.marking === "") {
      const action = {
        type: 'MARK_SPOT',
        position: square.position,
        marking: turn
      }
      props.dispatch(action)

      if (turn === 'X') {
        setTurn('O')
      }else {
        setTurn('X')
      }
      if (props.board[0].marking === props.board[1].marking && props.board[1].marking === props.board[2].marking && props.board[0].marking != '' || props.board[3].marking === props.board[4].marking && props.board[4].marking === props.board[5].marking && props.board[3].marking != '' || props.board[6].marking === props.board[7].marking && props.board[7].marking === props.board[8].marking && props.board[6].marking != '' ||
      props.board[0].marking === props.board[4].marking && props.board[4].marking === props.board[8].marking && props.board[0].marking != '' ||
      props.board[2].marking === props.board[4].marking && props.board[4].marking === props.board[6].marking && props.board[2].marking != '' ||
      props.board[0].marking === props.board[3].marking && props.board[3].marking === props.board[6].marking && props.board[0].marking != '' ||
      props.board[1].marking === props.board[4].marking && props.board[4].marking === props.board[7].marking && props.board[1].marking != '' ||
      props.board[2].marking === props.board[5].marking && props.board[5].marking === props.board[8].marking && props.board[2].marking != '') {
        setSwinner('You Win')
      }else if (props.board[0].marking != '' && props.board[1].marking != '' && props.board[2].marking != '' && props.board[3].marking != '' && props.board[4].marking != '' && props.board[5].marking != '' && props.board[6].marking != '' && props.board[7].marking != '' && props.board[8].marking != '') {
        setSwinner('Draw')
      }else {
        setSwinner('These Bros are Tacking their Toes')
      }
    }
  }



  return (
    <div className="board">
    <h1 className='swinner'>{swinner}</h1>
    <div className="topRow">
    <div onClick={() => onSquareClick(props.board[0])} className="top1">
    <Markings
    square = {props.board[0]}
    />
    </div>
    <div  onClick={() => onSquareClick(props.board[1])} className="top2">
    <Markings
    square = {props.board[1]}
    />
    </div>
    <div  onClick={() => onSquareClick(props.board[2])} className='top3'>
    <Markings
    square = {props.board[2]}
    />
    </div>
    </div>
    <div className="midRow">
    <div onClick={() => onSquareClick(props.board[3])} className="mid1">
    <Markings
    square = {props.board[3]}
    />
    </div>
    <div onClick={() => onSquareClick(props.board[4])} className="mid2">
    <Markings
    square = {props.board[4]}
    />
    </div>
    <div onClick={() => onSquareClick(props.board[5])} className='mid3'>
    <Markings
    square = {props.board[5]}
    />
    </div>
    </div>
    <div className="lowRow">
    <div onClick={() => onSquareClick(props.board[6])} className="low1">
    <Markings
    square = {props.board[6]}
    />
    </div>
    <div onClick={() => onSquareClick(props.board[7])} className="low2">
    <Markings
    square = {props.board[7]}
    />
    </div>
    <div onClick={() => onSquareClick(props.board[8])} className='low3'>
    <Markings
    square = {props.board[8]}
    />
    </div>
    </div>
    </div>
  );
}
Board = connect()(Board)
export default Board;
