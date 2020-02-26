import React from 'react';
import './Board.css';
import Markings from './Markings'
function Board() {
  return (
    <div className="board">
      <div className="topRow">
        <div className="top1">
        <Markings
        position={'1'}
        />
        </div>
        <div className="top2">
        <Markings
        position={'2'}
        />
        </div>
        <div className='top3'>
        <Markings
        position={'3'}
        />
        </div>
      </div>
      <div className="midRow">
        <div className="mid1">
        <Markings
        position={'4'}
        />
        </div>
        <div className="mid2">
        <Markings
        position={'5'}
        />
        </div>
        <div className='mid3'>
        <Markings
        position={'6'}
        />
        </div>
      </div>
      <div className="lowRow">
        <div className="low1">
        <Markings
        position={'7'}
        />
        </div>
        <div className="low2">
        <Markings
        position={'8'}
        />
        </div>
        <div className='low3'>
        <Markings
        position={'9'}
        />
        </div>
      </div>
    </div>
  );
}

export default Board;
