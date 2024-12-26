import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phoneService from './services/persons'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [changeMessage, setChangeMessage] = useState(null)


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
      setChangeMessage(`Henkilö ${person.name} poistettu luettelosta.`)
      setTimeout(() => { setChangeMessage(null) }, 5000)
    }
  }
  
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addPerson = event => {

    event.preventDefault()
    
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {

      // Copilotin generoima koodi, joka kysyy käyttäjältä, haluaako hän päivittää numeron.
      if (window.confirm(`${newName} on jo luettelossa. Haluatko päivittää numeron?`)) {
        // Päivitä numero
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }

        phoneService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
          })
          .catch(error => {
        console.log(error.response.data)
          })
        setNewName('')
        setNewNumber('')
        setChangeMessage(`Henkilön ${newName} numero päivitetty.`)
        setTimeout(() => { setChangeMessage(null) }, 5000)
      }
      // Älä tee mitään, jos nimeä ei päivitetä.
      // Voisi tyhjentää kentät, mutta se ei ole tehtävänannon mukaista.
      return
    }

    // Luo uusi henkilö.
    const personObject = {
      name: newName,
      number: newNumber
    }

    // Lisää uusi henkilö palvelimelle.
    phoneService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      .catch(error => {
        console.log(error.response.data)
      })

    // Tyhjennä kentät.
    console.log('Clearing fields')
    setNewName('')
    setNewNumber('')
    setChangeMessage(`Henkilö ${newName} lisätty luetteloon.`)
    setTimeout(() => { setChangeMessage(null) }, 5000)
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
      <Notification message={changeMessage} />
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
