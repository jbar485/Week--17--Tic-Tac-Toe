import React from 'react';
import './Board.css';
import Markings from './Markings'
import { connect } from 'react-redux';
function Board(props) {

  const action = {
    type: 'MARK_SPOT',
    position: '1',
    marking: 'x',
  }
  props.dispatch(action)


  return (
    <div className="board">
      <div className="topRow">
        <div className="top1">
        <Markings
        square = {props.board[0]}
        />
        </div>
        <div className="top2">
        <Markings
        square = {props.board[1]}
        />
        </div>
        <div className='top3'>
        <Markings
        square = {props.board[2]}
        />
        </div>
      </div>
      <div className="midRow">
        <div className="mid1">
        <Markings
        square = {props.board[3]}
        />
        </div>
        <div className="mid2">
        <Markings
        square = {props.board[4]}
        />
        </div>
        <div className='mid3'>
        <Markings
        square = {props.board[5]}
        />
        </div>
      </div>
      <div className="lowRow">
        <div className="low1">
        <Markings
        square = {props.board[6]}
        />
        </div>
        <div className="low2">
        <Markings
        square = {props.board[7]}
        />
        </div>
        <div className='low3'>
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
