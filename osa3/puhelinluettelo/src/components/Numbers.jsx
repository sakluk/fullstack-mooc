import PropTypes from 'prop-types'
// import phoneService from '../services/persons'

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

Numbers.propTypes = {
  persons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default Numbers