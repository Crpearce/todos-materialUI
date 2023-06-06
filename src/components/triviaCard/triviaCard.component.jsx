import { Card, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

const TriviaCard = ({ question, correctAnswer, incorrectAnswers }) => {
  const allChoices = [correctAnswer, ...incorrectAnswers]

  return (
    <Card>
      <h1>{question.text}</h1>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          {allChoices.map(choice => {
            return (
              <FormControlLabel value={choice} control={<Radio />} label={choice} />
            )
          })}
        </RadioGroup>
      </FormControl>
    </Card>
  )
}

export default TriviaCard
