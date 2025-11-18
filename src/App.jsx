import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Stopwatch.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Stopwatch.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card/>
    </>
      
  )
}

export default App
