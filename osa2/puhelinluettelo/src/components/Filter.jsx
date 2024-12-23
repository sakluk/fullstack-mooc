const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>rajaa näytettäviä: <input
        value={filter}
        onChange={handleFilterChange}
      /></p>
    </div>
  )
}

export default Filter