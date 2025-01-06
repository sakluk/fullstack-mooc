// Muutettu: 30.12.2024 18:17
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phoneService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [newMessage, setNewMessage] = useState(null)

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const removePerson = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Poistetaanko ${person.name}`)) {
      phoneService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
      const msg = {
        message: `Henkilö ${person.name} poistettu luettelosta.`,
        isError: false } 
      setNewMessage(msg)
      setTimeout(() => { setNewMessage(null) }, 5000)
    }
  }

  const addPerson = event => {
    event.preventDefault()
    
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      if (window.confirm(`${newName} on jo luettelossa. Haluatko päivittää numeron?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }

        phoneService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
          })
          .catch(error => {
            const msg = {
              message: `Virhe: ${error.response.data.error}`,
              isError: true }
            setNewMessage(msg)
            setTimeout(() => { setNewMessage(null) }, 5000)
          })

        const msg = {
          message: `Henkilön ${newName} numero päivitetty.`,
          isError: false }
        setNewMessage(msg)
        setTimeout(() => { setNewMessage(null) }, 5000)
        setNewName('')
        setNewNumber('')
      }
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
        const msg = {
          message: `Henkilön ${newName} lisääminen ei onnistunut. virhe: ${error.response.data.error}`,
          isError: true }
        setNewMessage(msg)
        setTimeout(() => { setNewMessage(null) }, 5000)
        setNewName('')
        setNewNumber('')
      })

    setNewName('')
    setNewNumber('')

    let msg = {
      message: `Henkilö ${newName} lisätty luetteloon.`,
      isError: false }
    setNewMessage(msg)
    setTimeout(() => { setNewMessage(null) }, 5000)
  }

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Notification msg={newMessage} />
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

// Lisätään prop-tyypit
Numbers.propTypes = {
  persons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

PersonForm.propTypes = {
  addPerson: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handlePersonChange: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

Notification.propTypes = {
  msg: PropTypes.object
}

export default App
