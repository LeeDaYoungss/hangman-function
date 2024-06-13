import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addLetters } from './LetterSlice';

// eslint-disable-next-line
export default function({value, onclick, reset}){
  const dispatch = useDispatch()

  const[isClicked, setIsClicked] = useState(false);
  let className = 'button';

  
  // reset 되었을때 변경해줌
  useEffect(()=>{
    if(reset) {
      setIsClicked(false);
    }
  }, {reset});
  

  if(isClicked){
    className += ' guessed';
  }
  if(reset){
    //setIsClicked(false);
    className = 'button';
  }


  function clickHandler(){
    setIsClicked(true);
    dispatch(addLetters(value));
  }
  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}