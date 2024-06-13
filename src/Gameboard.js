import LetterGrid from "./Letter-grid";
import ButtonGrid from "./Button-grid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { clearLetters } from './LetterSlice';


/*
function Gameboard() {
  return (
    <div className="App">
      <h2>Gameboard</h2>
    </div>
  );
}*/
const Gameboard = ({secretword, maxError})=>{
  const guessedLetters = useSelector(state => state.letter.letters);
  const dispatch = useDispatch()

 // const[guessedLetters, setGuessedLetters] = useState([]);
  const[errorCount, setErrorCount] = useState(0);
  const[reset, setReset] = useState(false);

  useEffect(()=>{
    if(guessedLetters.length > 0){
      let lastLetter = guessedLetters[guessedLetters.length - 1];
      guessedLetterHandler(lastLetter);
    }
  },[guessedLetters]); //최소한번,guessedLetters이 변경시
  
  useEffect(() => {
    if (reset) {
      setErrorCount(0);
      dispatch(clearLetters());


      let buttons = document.querySelectorAll('.buttons button');
      buttons.forEach(item => {
        item.classList.remove('guessed');
      });


      setTimeout(() => {
        setReset(false);
      }, 1000); // 1초 후 reset을 false로 변경
    }
  }, [reset, dispatch]); // reset 값이 바뀌면 dispatch도 변경해!


  const guessedLetterHandler = (val)=>{
    if(secretword.indexOf(val) === -1){
      setErrorCount(errorCount + 1);
    }
  }
  
  return (
    <div>
      <p>남은 횟수:{maxError - errorCount}</p>
      <LetterGrid reset={reset} secretword={secretword} guessedLetters={guessedLetters}/>
      <ButtonGrid reset={reset} onclick={guessedLetterHandler} isShown={errorCount < maxError}/>
      {errorCount === maxError && (
        <button onClick={()=>setReset(true)}>리셋</button> //reset이 true중인것을 false로 바꿈
        )}
      </div>
  );
}

export default Gameboard;
