import Letter from "./Letter";

const LetterGrid = ({secretword, guessedLetters, reset})=>{
  let letters = secretword
                .split('')
                .map((letter, index)=> {
                  let isShown = !reset && guessedLetters.indexOf(letter.toLowerCase()) > -1;
                  return(<Letter key={index} value={letter} isShown={isShown}/>)
                  }                
                );

  return (
    <div className="letters">
     {letters}
    </div>
  );
}

export default LetterGrid;
