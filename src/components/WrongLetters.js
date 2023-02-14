import React from 'react'

// Wrong letters recieves props from the hangman file and uses that to present the wrong letters next to the hangman. 
// MAps through wrongLetters and displays each with a break and in uppercase. 
const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <p>Letters you've guess:</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter.toUpperCase()}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, <br></br>, curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters