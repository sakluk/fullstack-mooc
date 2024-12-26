import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phoneService from './services/persons'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ])
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

  // Copilotin generoima funktio, joka poistaa henkilön listalta.
  const removePerson = id => {
    console.log('remove', id)
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Poistetaanko ${person.name}`)) {
      phoneService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }
  
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addPerson = event => {

    event.preventDefault()
    
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      alert(`${newName} on jo luettelossa`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    phoneService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      .catch(error => {
        console.log(error.response.data)
      })

    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} />  

      <h2>Lisää uusi</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} />  

      <h2>Numerot</h2>
      <Numbers persons={persons} filter={filter} callback={removePerson}/>

    </div>
  )
}

export default App
