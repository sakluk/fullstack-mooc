import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
 
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = event => {
    event.preventDefault()
    console.log('Painiketta painettu', event.target)
    const personObject = {
      name: newName
    }
    console.log('personObject', personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Puhelinmuistio</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input 
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div> 
        <ul>
          {persons.map(person =>
            <Person key={person.name} person={person} />
          )}
        </ul>
      </div>
    </div>
  )
}


export default App
