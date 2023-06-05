import { Card } from '@mui/material'


const TriviaCard = ({question, correctAnswer, incorrectAnswers}) => {
  return (
    <Card>
        <h1>{question.text}</h1>
    </Card>
  )
}

export default TriviaCard