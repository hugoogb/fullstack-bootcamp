import { Part } from './Part'

export const Content = ({ parts }) => {
  const totalExercises = parts.reduce((s, p) => {
    let total

    if (typeof s === 'object') {
      total = s.exercises + p.exercises
    } else {
      total = s + p.exercises
    }

    return total
  })

  return (
    <ul>
      {parts.map((part) => {
        return <Part part={part} key={part.id} />
      })}
      <p>Total of {totalExercises} exercises</p>
    </ul>
  )
}
