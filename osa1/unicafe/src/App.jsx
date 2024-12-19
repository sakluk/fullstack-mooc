import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('before, increased by one', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('before, decreased by one', counter) 
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('before, set to zero', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

export default App