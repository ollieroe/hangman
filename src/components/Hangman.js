import React, {useState, useEffect} from "react";
import Header from "./Header";
import Figure from "./Figure"
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import '../App.css';
import {words} from './Words'

// Function to select a random word within the words array component
let selectedWord = words[Math.floor(Math.random() * words.length)]


function Hangman(){
  // Sets the variables for state use. 
  // PLayable is used to determine the state of the game and when the game should have ended. 
    const [playable, setPlayable] = useState(true);
    // Correct Letters is the state array used to store the correct letters inputted by the user. 
    const [correctLetters, setCorrectLetters] = useState([]);
    // Wrong letters stores the incorrect letters inputted by the user. 
    const [wrongLetters, setWrongLetters] = useState([]);
    // Determines when the notifications i.e. win/lose  should be displayed. 
    const [showNotification, setShowNotification] = useState(false);

    //Use effect handles the keydown event where the user types letters to guess the word. 
    // The eventlistener added listens for keydown within the ranges for letters on the keyboard. 

    useEffect(() => {
      const handleKeydown = event => {
        const { key, keyCode } = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
              // Ensures the guesses are lowercase. 
          const letter = key.toLowerCase();
          //If the word selected for play includes a letter typed by the user => add to the correct letters array via 
          //setCorrect letters
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            }
          } else {
            // If the letter is not included 
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters => [...currentLetters, letter]);
            }
          }
        }
      }
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);
  
    // Resets the game at the end or if the reset button is clicked. 
    function playAgain() {
      setPlayable(true);
  
      // Empty Arrays
      setCorrectLetters([]);
      setWrongLetters([]);
  
      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
    }
    
    //Returns the components of the hangman game. 
    return (
      <>
        <Header wrongLetters={wrongLetters}/>
        <div className="game-container">
          <Figure wrongLetters={wrongLetters} />
          <WrongLetters wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        {/* <Notification showNotification={showNotification} /> */}
        <button onClick={playAgain}>Restart</button>
      </>
    );
  }

export default Hangman