import { useEffect, useState } from 'react'

import { Card, FormControl } from '@mui/material'

import axios from 'axios'

import './App.css'

const App = () => {
  const [allQuestions, setAllQuestions] = useState([])

  const getTriviaData = async () => {
    try {
      const response = await axios.get(
        'https://the-trivia-api.com/v2/questions/'
      )
      setAllQuestions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTriviaData()
  }, [])

  console.log(allQuestions)

  return (
    <div className='App'>
      <h1>Colby's Trivia Game</h1>
      {allQuestions.map(question => {
        return (
          <Card>
            <h2>{question.question.text}</h2>
          </Card>
        )
      })}
    </div>
  )
}

export default App
