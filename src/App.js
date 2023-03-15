import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (title) => {

    console.log('Clicked card:', title);

    setClickedCards(prevClickedCards => {
      if (prevClickedCards.includes(title)) {
        // Game over, set best score, reset score and clickedCards
        setScore(prevClickedCards.length)
        setBestScore(score)
        setScore(0)
        return [];
      } else {
        // If card has not been clicked before
        setScore(prevScore => prevScore + 1)
        return [...prevClickedCards, title];
      }
    })
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Gameboard handleCardClick={handleCardClick} />
    </>  );
}

export default App;
