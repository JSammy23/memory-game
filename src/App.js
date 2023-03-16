import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Popup } from "./components/Popup";

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleCardClick = (title) => {

    console.log('Clicked card:', title);

    setClickedCards(prevClickedCards => {
      if (prevClickedCards.includes(title)) {
        // Game over, set best score, reset score and clickedCards
        setScore(prevClickedCards.length)
        setBestScore(score)
        setScore(0)
        setGameOver(true)
        return [];
      } else {
        // If card has not been clicked before
        setScore(prevScore => prevScore + 1)
        return [...prevClickedCards, title];
      }
    })
  };

  const handlePopupClose = () => {
    setGameOver(false)
  }

  const handleWin = () => {
    setClickedCards(prevClickedCards => {
      if (score >= 12) {
        setScore(0)
        setBestScore(12)
        return [];
      }
    })
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header score={score} bestScore={bestScore} />
        {gameOver && <Popup title='Game Over!' message='Better luck next time!' onClick={handlePopupClose} />}
        {score >= 12 && <Popup
        title="You Win!" message="You clicked all 12 characters without clicking any of them twice, your memory must be great!" onClick={handleWin} />}
        <Gameboard handleCardClick={handleCardClick} />
      </div>
      <Footer />
    </div>  );
}

export default App;
