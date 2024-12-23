import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2021-05-30T17:30:31.098Z',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2021-05-30T18:39:34.091Z',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'Most important methods of HTTP-protocol are GET and POST',
//     date: '2021-05-30T19:20:14.298Z',
//     important: true,
//   },
// ]
// console.log('notes at main.jsx', notes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
