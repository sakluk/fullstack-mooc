import { useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

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
      <h2>Puhelinluettelo</h2>
      <div>
        <p>rajaa näytettäviä: <input
          value={filter}
          onChange={handleFilterChange}
        /></p>
      </div>

      <h2>Lisää uusi</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} />  

      <h2>Numerot</h2>
      <Numbers persons={persons} filter={filter} />

    </div>
  )
}

export default App
