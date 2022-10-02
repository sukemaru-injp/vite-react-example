import { useReducer, useCallback } from 'react';

type Action = 'increment' | 'reset'

export const useCounter = (initialState = 0) => {
  const reducer = (countState: number, action: Action)=> {
    switch (action){
      case 'increment':
        return countState + 1
      case 'reset':
        return initialState
      default:
        return countState
    }
  }

  const [counter, counterDispatch] = useReducer(reducer, initialState)
  const increment = useCallback(() => counterDispatch('increment'), [])
  const reset = useCallback(() => counterDispatch('reset'), [])

  return { counter, increment, reset }
}