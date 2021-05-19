import './styles.css'
import { Note } from './components/Note.js'

const App = (props) => {
  const { notes } = props

  if (typeof notes === 'undefined' || notes === null || notes.length === 0) {
    return 'There are no notes to show'
  }

  return (
    <div className='App'>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return <Note key={note.id} content={note.content} date={note.date} />
        })}
      </ul>
    </div>
  )
}

export default App
