export const Filter = ({ filter, setFilter }) => {
  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      Filter by name:
      <input type='text' onChange={handleChangeFilter} value={filter} />
    </div>
  )
}
