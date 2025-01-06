import PropTypes from 'prop-types'

const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        nimi: <input 
          value={newName}
          onChange={handlePersonChange}
        />
      </div>
      <div>
        numero: <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

// Lisätään prop-tyypit
PersonForm.propTypes = {
  addPerson: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handlePersonChange: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired
}

export default PersonForm
