import { useEffect, useState } from 'react'

import TriviaCard from '../triviaCard/triviaCard.component'

import './deck.styles.css'

const Deck = ({ allQuestions }) => {
  const [randomNumber, setRandomNumber] = useState()
  const [randomCard, setRandomCard] = useState()
  const [deckLength, setDeckLength] = useState(10) 
  const [userScore, setUserScore] = useState(0)

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * deckLength))
    setRandomCard(allQuestions[randomNumber])
  }, [allQuestions, deckLength, randomNumber])

  const deleteCard = () => {
    setDeckLength(deckLength - 1)
    allQuestions.splice(randomNumber, 1)
  }

  console.log(allQuestions)

  return (
    <div className='deck-container'>
      {randomCard && (
        <TriviaCard
          key={randomCard.id}
          question={randomCard.question}
          correctAnswer={randomCard.correctAnswer}
          incorrectAnswers={randomCard.incorrectAnswers}
          deleteCard={deleteCard}
          setUserScore={setUserScore}
          userScore={userScore}
        />
      )}
    </div>
  )
}

export default Deck
