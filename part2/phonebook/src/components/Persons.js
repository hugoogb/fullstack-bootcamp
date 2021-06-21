export const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          if (filter === '') {
            return true
          } else if (filter === person.name) {
            return true
          } else {
            return false
          }
        })
        .map((person) => {
          return (
            <p key={person.name}>
              <strong>{person.namstronge}</strong> {person.number}
            </p>
          )
        })}
    </div>
  )
}
