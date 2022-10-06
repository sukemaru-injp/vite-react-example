import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles'
import { AppProvider } from './providers/app'
import { RoutesIndex } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <RoutesIndex />
    </AppProvider>
  </React.StrictMode>
)
