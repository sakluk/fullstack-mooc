import PropTypes from 'prop-types'

const Numbers = ({ persons, filter, callback }) => {
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <ul>
      {personsToShow.map(person => 
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => callback(person.id)}>delete</button>
        </li>
      )}
    </ul>
  )
}

Numbers.propTypes = {
  persons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default Numbers