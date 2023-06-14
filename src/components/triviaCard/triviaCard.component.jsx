import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'

const TriviaCard = ({ question, correctAnswer, incorrectAnswers }) => {
  const allChoices = [correctAnswer, ...incorrectAnswers]
  console.log(question)
  return (
    <Card >
      <h1>{question.text}</h1>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
        >
          {allChoices.map((choice) => {
            return (
              <FormControlLabel
                key={choice}
                value={choice}
                control={<Radio />}
                label={choice}
              />
            )
          })}
        </RadioGroup>
        <Button variant='contained' size='small' style={{ maxWidth: '100px' }}>
          Submit
        </Button>
      </FormControl>
    </Card>
  )
}

export default TriviaCard
