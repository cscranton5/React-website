import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  return (
    Board()
  );
}



export function Board() {

  const [squares,setSquares] = useState(Array(9).fill(null))


  return (
    <>
      <div>
        <div className='Tic-tack-toe-board'>
          <div className='board-row'>
            <Square value={squares[0]} onSquareClicked={onClick}/>
            <Square value={squares[1]} onSquareClicked={onClick}/>
            <Square value={squares[2]} onSquareClicked={onClick}/>
          </div>
          <div className='board-row'>
            <Square value={squares[3]} onSquareClicked={onClick}/>
            <Square value={squares[4]} onSquareClicked={onClick}/>
            <Square value={squares[5]} onSquareClicked={onClick}/>
          </div>
          <div className='board-row'>
            <Square value={squares[6]} onSquareClicked={onClick}/>
            <Square value={squares[7]} onSquareClicked={onClick}/>
            <Square value={squares[8]} onSquareClicked={onClick}/>
          </div>
        </div>
      </div>


    </>

  );
}

function Square({value, onSquareClicked}) {

  function handleClick() {
    setValue('X');
  }


  return <button className="square" onClick={onSquareClicked}>{value}</button>;
} 

export default App;
