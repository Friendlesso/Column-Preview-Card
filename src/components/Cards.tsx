import { Card } from './Card/Card'
import { useState } from 'react';
import { cards } from '../data/cardList';

export function Cards() {

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className=' sm:flex-row flex flex-col justify-center items-center'>
      {cards.map(card => {
        return <Card
          key={card.title}
          title={card.title}
          description={card.description}
          icon={card.icon}
          color={card.color}
          textColor={card.textColor}
          hovered={hovered}
          setHovered={setHovered}
        />
      })}
    </section>
  )
}