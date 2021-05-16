import React, { useState } from 'react'
import './styles.css'

const Buttons = (props) => {
  return (
    <div className='Buttons'>
      <button onClick={props.handleClickGood}>good</button>
      <button onClick={props.handleClickNeutral}>neutral</button>
      <button onClick={props.handleClickBad}>bad</button>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = (props.good - props.bad) / props.total
  const positive = (props.good * 100) / props.total

  return (
    <div className='Statistics'>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text={props.goodText} value={props.good} />
          <Statistic text={props.neutralText} value={props.neutral} />
          <Statistic text={props.badText} value={props.bad} />
          <tr>
            <td>all</td>
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  const handleClickGood = () => {
    setGood((prevState) => {
      return prevState + 1
    })
  }

  const handleClickNeutral = () => {
    setNeutral((prevState) => {
      return prevState + 1
    })
  }

  const handleClickBad = () => {
    setBad((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
      />
      {total === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics
          goodText='good'
          good={good}
          neutralText='neutral'
          neutral={neutral}
          badText='bad'
          bad={bad}
          total={total}
        />
      )}
    </div>
  )
}

export default App
