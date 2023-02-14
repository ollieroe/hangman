import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Help from "./components/Help";
import Hangman from './components/Hangman';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route exact path="/" element={< Hangman/>} />
          <Route exact path="/Help" element={<Help />}/>
      </Routes>

    </div>
  );
}

export default App;
