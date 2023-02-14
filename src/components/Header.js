import React from 'react'

// The header at the top of the page. The Header component recieves wrong letter props in the Hangman file which is used to
// determine how many guesses are remaining. 
const Header = ({wrongLetters}) => {
  let remaining = wrongLetters.length
  return (
    <>
      <h1>Hangman</h1>
      <p>Type letters to guess the word. You have <span style={{color: 'red'}}>{10 - remaining}</span> guesses remaining</p>
      <p> Click help above for more information how to play the game. Presing help resets the game. </p>
    </>
  )
}

export default Header