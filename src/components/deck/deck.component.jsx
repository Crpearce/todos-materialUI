import TriviaCard from '../triviaCard/triviaCard.component'
import './deck.styles.css'
import { Card } from '@mui/material'

const Deck = ({ allQuestions }) => {
    console.log(allQuestions)
  return (
    <div>
      {allQuestions.map((question) => {
        return (
          <TriviaCard question={question.question} correctAnswer={question.correctAnswer} incorrectAnswers={question.incorrectAnswers}/>
        )
      })}
    </div>
  )
}

export default Deck
