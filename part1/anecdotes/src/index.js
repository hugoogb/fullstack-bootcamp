import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

  const handleNextAnecdote = () => {
    let min = 0
    let max = 6
    setSelected(random(min, max))
  }

  const handleVoteAnecdote = () => {
    let copyVotes = [...votes]
    copyVotes[selected] += 1

    setVotes(copyVotes)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div className='App'>
      <h2>{anecdotes[selected]}</h2>
      <h3>has {votes[selected]} votes</h3>
      <button onClick={handleVoteAnecdote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h2>anecdote with the most votes</h2>
      <h3>{anecdotes[mostVotes]}</h3>
      <h3>has {votes[mostVotes]} votes</h3>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
