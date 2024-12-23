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
  const [newNote, setNewNote] = useState('')
  

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log('notes', notes)
  }

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
    <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange} 
        />  
        <button type="submit">Tallenna</button>
    </form>
  </div>
  )

}

export default App
