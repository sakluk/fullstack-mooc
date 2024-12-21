import { useState } from 'react'

const App = () => {
  const anecdotes_fi = [
    'Jos se sattuu, tee sitä useammin.',
    'Lisäämällä työvoimaa myöhästyneeseen ohjelmistoprojektiin se myöhästyy entisestään!',
    'Ensimmäiset 90 prosenttia koodista vievät ensimmäiset 90 prosenttia kehitysajasta...Loput 10 prosenttia koodista vievät toiset 90 prosenttia kehitysajasta.',
    'Kuka tahansa hölmö voi kirjoittaa koodia, jonka tietokone ymmärtää. Hyvät ohjelmoijat kirjoittavat koodia, jonka ihmiset ymmärtävät.',
    'Ennenaikainen optimointi on kaiken pahan alku.',
    'Debuggaus on kaksi kertaa vaikeampaa kuin koodin kirjoittaminen alun perin. Siksi, jos kirjoitat koodin niin älykkäästi kuin mahdollista, et ole määritelmän mukaan tarpeeksi fiksu debuggaamaan sitä.',
    'Ohjelmointi ilman erittäin runsasta console.login käyttöä on sama kuin jos lääkäri kieltäytyisi käyttämästä röntgenkuvia tai verikokeita diagnosoidessaan potilaita.',
    'Ainoa tapa mennä nopeasti, on mennä hyvin.'
  ]

  const anecdotes_en = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => Math.floor(Math.random() * anecdotes_fi.length)

  const handleClick = () => {
    setSelected(getRandomAnecdote())
  }

  return (
    <div>
      <p>{anecdotes_fi[selected]}</p>
      <p>{anecdotes_en[selected]}</p>
      <button onClick={handleClick}>Seuraava anekdootti</button>
    </div>
  )
}

export default App