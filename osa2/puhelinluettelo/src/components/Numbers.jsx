import phoneService from '../services/persons'

const Numbers = ({ persons, filter, callback }) => {
  
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <ul>
        {personsToShow.map(person => 
          <li key={person.name}>
            {person.name}  {person.number}  
            <button onClick={() => {
              console.log('onClick', person.id)  
              callback(person.id)
            }}>Poista</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Numbers