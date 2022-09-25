import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages'
import InputPage from './pages/input'
import { GlobalStyle } from './styles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

interface RouterConfigType {
  path: string
  component: React.FC
  routes?: RouterConfigType[]
}

const APP_ROUTER: ReadonlyArray<RouterConfigType> = [
  {
    path: '/',
    component: App,
    routes: []
  },
  {
    path: 'input',
    component: InputPage,
    routes: []
  },
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
        <Routes>
          {APP_ROUTER.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={
                  <route.component />
              } />            
          ))}
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
