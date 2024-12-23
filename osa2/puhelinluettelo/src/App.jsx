import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
 
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = event => {
    event.preventDefault()
    // console.log('Painiketta painettu', event.target)
    // console.log('newName', newName)
    const names = persons.map(person => person.name)
    // console.log(names.includes(newName))
    if (names.includes(newName)) {
      alert(`${newName} on jo luettelossa`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    // console.log('personObject', personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Puhelinmuistio</h2>
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
