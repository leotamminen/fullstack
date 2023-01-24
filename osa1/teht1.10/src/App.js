import { useState } from 'react'

// Palaute step5
// oikea paikka komponentin määrittelyyn
const NoFeedback = () => {
  return (
    <p>No feedback given</p>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100 + " %"

  return (
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isVisible = good + neutral + bad


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>
        good
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>

      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h1>statistics</h1>
      {isVisible ? <Statistics good={good} neutral={neutral} bad={bad} /> : <NoFeedback />}


    </div>
  )
}

export default App