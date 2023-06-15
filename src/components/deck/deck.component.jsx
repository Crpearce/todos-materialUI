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

  // need to now capture a users selected answer, and make sure that it is a match with the correct answer
  // all answers need to be randomized, think of a function to change the order of each potential answer so they arent all the same

  return (
    <div>
      {randomCard && (
        <TriviaCard
          key={randomCard.id}
          question={randomCard.question}
          correctAnswer={randomCard.correctAnswer}
          incorrectAnswers={randomCard.incorrectAnswers}
        />
      )}
    </div>
  )
}

export default Deck
