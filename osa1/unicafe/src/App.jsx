import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

/**
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {
  // Nämä rivit on kopioitu tehtävä 1.6 mukaisesta koodista.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Oheinen koodi on Copilotin generoimaa. Pyyhin pois edellisen osa1:ssa
  // esitellyn esimerkkikoodin ja korvasin sen seuraavalla Copilotin 
  // rivi kerrallaan ehdottamalla koodilla.
  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
    </div>
  )
}

export default App