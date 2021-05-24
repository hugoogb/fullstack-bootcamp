import './styles.css'
import { Note } from './components/Note.js'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('create note')
    console.log(newNote)

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    console.log(noteToAddToState)

    //setNotes(notes.concat(noteToAddToState))
    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div className='App'>
      <h1>Notes</h1>
      <p>
        <strong>
          {showAll ? 'Showing all notes' : 'Showing only important notes'}
        </strong>
      </p>
      <button onClick={handleShowAll}>
        {showAll ? 'Show only important' : 'Show all'}
      </button>
      <ol>
        {notes
          .filter((note) => {
            if (showAll === true) {
              return true
            } else {
              return note.important === true
            }
          })
          .map((note) => {
            return (
              <Note key={note.id} content={note.content} date={note.date} />
            )
          })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Create note</button>
      </form>
    </div>
  )
}

export default App
