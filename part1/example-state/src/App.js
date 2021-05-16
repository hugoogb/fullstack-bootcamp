import { useState } from 'react'
import './styles.css'

/*
const Counter = ({ number }) => {
  console.log('Counter render')
  return <h1>{number}</h1>
}

const App = () => {
  const [counter, setCounter] = useState(0)

  // Equivalent to code above
  //const contador = useState(0)
  //const contadorValue = contador[0]
  //const contadorUpdate = contador[1]

  console.log('render')

  const handleClickIncrease = () => {
    //setCounter(counter + 1)
    //setCounter((prevCounter) => prevCounter + 1)

    // Same as the 2 methods above
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
  }

  const handleClickDecrease = () => {
    setCounter(counter - 1)
  }

  const handleClickReset = () => {
    setCounter(0)
  }

  const isEven = counter % 2 === 0
  const messageEvenNotEven = isEven ? 'Is even' : 'Is not even'

  return (
    <div className='App'>
      <p>Counter value is:</p>
      <Counter number={counter} />
      <p>{messageEvenNotEven}</p>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}
*/

const WarningNotUsed = () => {
  return <h1>Counter not used yet</h1>
}

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(', ')}</p>
}

/*
const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  message: 'Message on state',
}
*/

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)

  //const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)

  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    //setCounters({
    //...counters,
    //left: counters.left + 1,
    //})
    setClicks((prevClicks) => [...prevClicks, 'L'])
  }

  const handleClickRight = () => {
    //const newCountersState = {
    //...counters,
    //right: counters.right + 1,
    //}
    //setCounters(newCountersState)
    setClicks((prevClicks) => {
      return [...prevClicks, 'R']
    })
  }
  const handleClickReset = () => {
    //setCounters(INITIAL_COUNTER_STATE)
    setClicks([])
  }

  const leftClicks = clicks.filter((click) => click === 'L')
  const rightClicks = clicks.filter((click) => click === 'R')

  return (
    <div>
      {leftClicks.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {rightClicks.length}
      <p>
        <button onClick={handleClickReset}>reset</button>
      </p>
      <p>Total clicks: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  )
}

export default App
