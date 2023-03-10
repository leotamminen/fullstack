import { useState } from 'react'

// Palaute step5
// oikea paikka komponentin määrittelyyn
const NoFeedback = () => {
  return (
    <p>No feedback given</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>{props.text} {props.value}</div>

  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100 + " %"

  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
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

      <Button handleClick={() => setGood(good + 1)} text="good" />

      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />

      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      {isVisible ? <Statistics good={good} neutral={neutral} bad={bad} /> : <NoFeedback />}

    </div>
  )
}

export default App