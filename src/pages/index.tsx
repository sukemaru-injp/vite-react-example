import React from 'react'
import Button from '../components/Button'
import { useToggle, useCounter } from '../components/hooks'

const App: React.FC = () => {
  const [isCheck, setCheck] = useToggle(false)
  const { counter, increment, reset } = useCounter(1)

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
    </div>
  )
}

export default App
