import { useState } from 'react';
import './App.css';
import Gameboard from './Gameboard';
import WordSelect from './Word-select';

function App() {
  const[secretword, setSecretWord] = useState('');
  const[isShown, setIShown] = useState(false);

  return (
    <div className="App">
     <h1>Hangman</h1>
     <p>Do you want to play game</p>
     <div>
      { isShown ? 
        <Gameboard secretword={secretword} maxError={6} isShown={secretword}/>
        :
        <WordSelect wordSelected={(val)=>{
          setSecretWord(val);
          setIShown(true);
        }}/>
      }
     </div>
    </div>
  );
}

export default App;
