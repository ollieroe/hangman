import Image from '../images/hangman.png'

// Help component that explains how the game is played with a picture of the final hangman image. 
function Help(){
    return (
    <div className="help">
    <h1>Instructions for the Game</h1>
    <ul>
        <li>A randonm word will be selected for you</li>
        <li>The number of spaces show the length of the word</li>
        <li>Type which letter will be in int he word</li>
        <li>If the letter is guessed correctly the letters will show up on screen</li>
        <li>If the guess is wrong the hangman will start to be drawn</li>
        <li>You have up to 10 guesses to guess the word</li>
        <li>If the full hangman picture is drawn the games ends and you will be alerted</li>
        <li>Press restart to rsestart the game</li>
    </ul>
    <img src={Image} alt="Picture of Hangman game"></img>
    </div>
    )
}

export default Help