import { useState } from 'react'

// Button objekti on kopioitu esimerkkikoodeista.
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

// Oheinen koodi on Copilotin generoimaa. Aloitin koodin kirjoittamalla
// komponentin Statistics ja loput rivit ovat Copilotin ehdottamia.
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = 100*(good - bad) / (good + neutral + bad)

// Lisätty ehto, joka tulostaa tekstin "No feedback given", jos palautteita ei ole annettu.
  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <p>all {all}</p>
      <p>average {average} %</p>
    </div>
  )
}



const App = () => {
  // Nämä rivit on kopioitu tehtävä 1.6 mukaisesta koodista.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Oheinen koodi on Copilotin generoimaa. Aloitin koodin kirjoittamalla
  // <h1>give feedback</h1> ja loput rivit ovat Copilotin ehdottamia.
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App