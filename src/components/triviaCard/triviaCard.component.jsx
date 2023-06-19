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
  const shuffledChoices = allChoices.sort(() => (Math.random() > .5) ? 1 : -1)

  const onChangeValue = (e) => {
    console.log(e.target.value)
  }

  return (
    <Card>
      <h1>{question.text}</h1>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
        >
          {shuffledChoices.map((choice) => {
            return (
              <FormControlLabel
                key={choice}
                value={choice}
                control={<Radio />}
                label={choice}
                onClick={onChangeValue}
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
