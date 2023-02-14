import React, { useEffect } from 'react';
// import { checkWin } from './helpers/helpers';

function checkWin(correct, wrong, word) {
  let status = 'win';

  // Splits the word at each letter and checks if it is included within correct.
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Checks against the length of the wrong words and if over 10 the user loses. 
  if(wrong.length === 10) status = 'lose';

  return status
}
// Popsup at the end of the game. If checkwin == win it displays the win popup.
// If checkwin == lose the final message popup is displayed.  
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Well Done! You won the game!';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'You lost - the man got hanged!';
    finalMessageRevealWord = `Reveal word: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup