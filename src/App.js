import { useEffect, useState } from 'react'

import Navigation from './components/navigation/navigation.component'
import Deck from './components/deck/deck.component'

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

  return (
    <div className='App'>
      <Navigation />
      <Deck allQuestions={allQuestions} />
    </div>
  )
}

export default App
