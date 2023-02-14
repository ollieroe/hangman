import { Link } from "react-router-dom";

// Navbar component for navigation to the hangman game and help link. 
function Navbar(){
    return(
    <div className="navbar">
        <Link to="/" style={{marginRight: '200px'}}>Hangman</Link>
        <Link to="/Help">Help</Link>
    </div>
    )
}

export default Navbar