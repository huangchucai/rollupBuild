import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import run from "../../../";

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    run()
  }, [])
  return (
    <div className="App">
      <div id='hcc' />
    </div>
  )
}

export default App
