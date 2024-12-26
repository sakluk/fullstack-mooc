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
          if (filteredCountries.length > 10) {
            setCountries(<p>Too many matches, specify another filter</p>)
          } else if (filteredCountries.length > 1) {
            setCountries(filteredCountries.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            )))
          } else {
            const country = filteredCountries[0]
            setCountries(
              <div>
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital}</p>
              <p>Area: {country.area} km²</p>
              <h3>Languages:</h3>
              <p>{Object.values(country.languages).join(', ')}</p>
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
              </div>
            )
          }
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
      {countries}
    </div>
  )
}

export default App
