import { Card, RadioGroup } from '@mui/material'

const TriviaCard = ({ question, correctAnswer, incorrectAnswers }) => {
  const allChoices = [correctAnswer, incorrectAnswers]

  return (
    <Card>
      <h1>{question.text}</h1>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      ></RadioGroup>
      {allChoices}
    </Card>
  )
}

export default TriviaCard
