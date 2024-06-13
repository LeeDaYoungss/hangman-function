import Button from "./Button";

const ButtonGrid = ({onclick, isShown, reset})=>{ 
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];
  //letters를 가지고 button태그 생성
  let buttons = letters.map((letter,index)=><Button
  value={letter} 
  key={index}
  onclick={onclick}
  reset={reset}
  />)
  let className = 'buttons';
  if(!isShown){
    className += ' hidden';
  }
  return (
    <div className={className}>
      {buttons}
    </div>
  );
}

export default ButtonGrid;
