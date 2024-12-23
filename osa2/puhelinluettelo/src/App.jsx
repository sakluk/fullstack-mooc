import { useState } from 'react'

// Leikitään aluksi Note-komponentilla
import Note from './components/Note'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  // Opettelua varten
  const [notes, setNotes] = useState(props.notes)
  // Tarkista, että notes on olemassa ja että se on taulukko
  // console.log('notes at App.jsx after useState', notes)

  return (
    <div>
      {/* Varsinainen tehtävä */}
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

    {/* Opettelua varten */}
    <h1>Notes</h1>
    <ul>
      {notes.map(note => <Note key={note.id} note={note} />)}
    </ul>
  </div>
  )

}

export default App
