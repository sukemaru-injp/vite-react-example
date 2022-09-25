import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
padding: 5px;
background-color: blueviolet;
`

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
