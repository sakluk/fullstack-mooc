import PropTypes from 'prop-types'

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

// Lisätään prop-tyypit
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

export default Filter