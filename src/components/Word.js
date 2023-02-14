import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  // Displays the word at the bottom of the hangman.
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word