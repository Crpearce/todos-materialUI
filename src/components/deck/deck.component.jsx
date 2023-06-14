import { useEffect, useState } from 'react';
import TriviaCard from '../triviaCard/triviaCard.component'

import './deck.styles.css'

const Deck = ({ allQuestions }) => {
  const [randomNumber, setRandomNumber] = useState()
  // create an initial function to generate a randmomized question from the allQuestions prop that is being passed down
  // render the one random card to the screen, when an answer has been submit(button click), then splice that specific object out, 
  // randomly generate another question for the user
useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 11))
}, []);
 console.log(allQuestions[randomNumber])
  return (
    <div>
      {allQuestions.map((question) => {
        return (
          <TriviaCard
            key={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
          />
        )
      })}
    </div>
  )
}

export default Deck
