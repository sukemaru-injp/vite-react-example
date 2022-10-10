import React from 'react'
import { useRoutes } from 'react-router-dom'
import App from '../pages'
import InputPage from '../pages/input'
import GenPage from '../pages/gen'

const routes = [
  {
    path: '/app',
    element: <App />,
    children: []
  },
  {
    path: '/gen',
    element: <GenPage />,
    children: []
  },
  {
    path: '/input',
    element: <InputPage />
  }
]

export const RoutesIndex = () => {
  const element = useRoutes([...routes])
  return <>{element}</>
}