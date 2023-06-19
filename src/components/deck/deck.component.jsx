import { useEffect, useState } from 'react'

import TriviaCard from '../triviaCard/triviaCard.component'

import './deck.styles.css'

const Deck = ({ allQuestions }) => {
  const [randomNumber, setRandomNumber] = useState()
  const [randomCard, setRandomCard] = useState()

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 11))
    setRandomCard(allQuestions[randomNumber])
  }, [allQuestions])

  const deleteCard = () => {

  }

  return (
    <div className='deck-container'>
      {randomCard && (
        <TriviaCard
          key={randomCard.id}
          question={randomCard.question}
          correctAnswer={randomCard.correctAnswer}
          incorrectAnswers={randomCard.incorrectAnswers}
          length={allQuestions.length}
          deleteCard={deleteCard}
        />
      )}
    </div>
  )
}

export default Deck
