export const Part = ({ part }) => {
  return (
    <li>
      <p>
        <strong>
          {part.name} {part.exercises}
        </strong>
      </p>
    </li>
  )
}
