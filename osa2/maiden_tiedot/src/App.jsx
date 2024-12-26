import { useState, useEffect } from 'react'
import axios from 'axios'

// Tämä on Copilotin generoima koodi, joka hakee maat ja näyttää ne listana.
function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (query) {
      console.log('Fetching data')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          const filteredCountries = response.data.filter(country =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          )
          setCountries(filteredCountries)
        })
    } else {
      setCountries([])
    }
  }, [query])

  console.log('Rendering', countries.length, 'countries')
  return (
    <div>
      <h1>Find countries</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQuery(query)}>Search</button>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
