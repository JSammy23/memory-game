import React, { useState } from 'react'
import Card from './Card'
import Spongebob from '../assets/images/SpongeBob-SquarePants.webp'
import Patrick from '../assets/images/Patrick.webp'
import Gary from '../assets/images/Gary.webp'
import Krabs from '../assets/images/Mr-Krabs.webp'
import Larry from '../assets/images/Larry.webp'
import Pearl from '../assets/images/Pearl.webp'
import Plankton from '../assets/images/Plankton.webp'
import Sandy from '../assets/images/Sandy.webp'
import Squidward from '../assets/images/Squidward.webp'
import Puff from '../assets/images/Mrs-Puff.webp'
import FishHead from '../assets/images/Fish-Head.webp'
import FlyingDuchman from '../assets/images/Flying-Duchman.webp'



function Gameboard() {

  const [cards, setCards] = useState([
    { title: 'SpongeBob SquarePants', image: Spongebob },
    { title: 'Patrick', image: Patrick },
    { title: 'Gary', image: Gary },
    { title: 'Mr. Krabs', image: Krabs },
    { title: 'Larry', image: Larry },
    { title: 'Pearl', image: Pearl },
    { title: 'Plankton', image: Plankton },
    { title: 'Sandy', image: Sandy },
    { title: 'Squidward', image: Squidward },
    { title: 'Mrs. Puff', image: Puff },
    { title: 'Fish Head', image: FishHead },
    { title: 'Flying Dutchman', image: FlyingDuchman },
  ]);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() -0.5);
    setCards(shuffledCards)
  };

  return (
    <div className='gameboard'>
      {cards.map((card) => (
        <Card 
        key={card.title}
        title={card.title}
        image={card.image}
        shuffleCards={shuffleCards} />
      ))}
    </div>
  )
}

export default Gameboard