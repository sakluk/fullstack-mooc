import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

let counter = 1

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App counter={counter} />
// )

const root = ReactDOM.createRoot(document.getElementById("root"))

const refresh = () => {
    root.render(<App counter={counter} />)
  }

refresh()
counter += 1
refresh()
counter += 1
refresh()