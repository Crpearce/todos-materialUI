import TriviaCard from '../triviaCard/triviaCard.component'

import './deck.styles.css'

const Deck = ({ allQuestions }) => {

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
