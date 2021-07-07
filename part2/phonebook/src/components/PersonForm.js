export const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personAddToState = {
      name: newName,
      number: newNumber,
    }

    if (persons.some((e) => e.name === newName)) {
      alert(newName + ' already exists in your phonebook')
    } else {
      setPersons([...persons, personAddToState])
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            Name:
            <input
              type='text'
              onChange={handleChangeName}
              value={newName}
              required
            />
          </div>
          <div>
            Number:
            <input
              type='number'
              onChange={handleChangeNumber}
              value={newNumber}
              required
            />
          </div>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}
