import PropTypes from 'prop-types'

const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
              <p>
                nimi: <input 
                  value={newName}
                  onChange={handlePersonChange}/>
              </p>
              <p>
                numero: <input 
                value={newNumber}
                onChange={handleNumberChange}/>
              </p> 
            </div>
            <div>
              <button type="submit">Lisää</button>
            </div>
          </form>
       )
}

PersonForm.propTypes = {
  addPerson: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handlePersonChange: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
}

export default PersonForm
