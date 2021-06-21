import './styles.css'
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newName)

    const personAddToState = {
      id: newName,
    }

    console.log(personAddToState)

    setPersons([...persons, personAddToState])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type='text' onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map((person) => {
          return <p>person.id</p>
        })}
      </p>
    </div>
  )
}

export default App
