
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

export default PersonForm
