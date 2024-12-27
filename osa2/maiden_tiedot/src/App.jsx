import { useState, useEffect } from 'react'
import axios from 'axios'

// Tämä on Copilotin generoima koodi, joka hakee maat ja näyttää ne listana.
function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
    // console.log('API key:', apiKey)
    if (query) {
      // console.log('Fetching data')
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
            axios
              .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${apiKey}&units=metric`)
              .then(weatherResponse => {
                const weather = weatherResponse.data.current
                setCountries(
                  <div>
                  <h2>{country.name.common}</h2>
                  <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
                  <p>Capital: {country.capital}</p>
                  <p>Area: {country.area} km²</p>
                  <p>Population: {country.population}</p>
                  {country.gini && (
                    <p>Gini: {Object.values(country.gini).join(', ')}</p>
                  )}
                  <h3>Languages</h3>
                  <p>{Object.values(country.languages).join(', ')}</p>
                  <h3>Weather at capital</h3>
                  <p>Temperature: {weather.temp} °C</p>
                  <p>Pressure: {weather.pressure} mbar</p>
                  <p>Humidity: {weather.humidity} %</p>
                  <p>Wind speed: {weather.wind_speed} m/s</p>
                  <p>Weather: {weather.weather[0].description}</p>
                  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />  
                  </div>
                )
              })
            .catch(error => {
              console.log('Error fetching weather data:', error)
              setCountries(<p>Error fetching weather data</p>)
            })
          }
        })
    } else {
      setCountries([])
    }
  }, [query])

  // console.log('Rendering', countries.length, 'countries')
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
