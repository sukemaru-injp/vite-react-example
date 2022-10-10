import React, { useEffect } from 'react'
import Button from '../components/Button'
import { useToggle, useCounter } from '../components/hooks'
import { Link } from 'react-router-dom'
import axios from 'axios'

const App: React.FC = () => {
  const [isCheck, setCheck] = useToggle(false)
  const { counter, increment, reset } = useCounter(1)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_FASTIFY_APP_API_PATH}`)
      console.log('Done Connect Api', data)
    })()
  }, [])

  return (
    <div className="App">
      <h1>Vite React</h1>
      <div className="card">
        <Button onClick={increment}>
          count is {counter}
        </Button>
        <Button onClick={reset}>
          reset
        </Button>
      </div>
      <div>
        <input type="checkbox" onChange={() => setCheck()}/>
        <label>{ isCheck ? 'Yes Check' : 'No Check'}</label>
      </div>
      <Link to="/input">input</Link>

      <Link to="/gen">Generator</Link>
    </div>
  )
}

export default App
