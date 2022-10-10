import React, { useReducer, ChangeEvent, useEffect, useCallback } from 'react'
import Button from './Button'
import { match } from 'ts-pattern'

type GeneratorFormState = {
  text: string
  key: string
}
type ActionType = { type: 'SET_TEXT', payload: GeneratorFormState['text'] } | { type: 'SET_KEY', payload: GeneratorFormState['key'] }

const initialState = {
  text: '',
  key: ''
}
const reducer = (prev: GeneratorFormState, action: ActionType) => {
  return match(action)
  .with({ type: 'SET_TEXT'}, () => {
    return {
      ...prev,
      text: action.payload
    }
  })
  .with({ type: 'SET_KEY'}, () => {
    return {
      ...prev,
      key: action.payload
    }
  })
  .exhaustive()
}

const useGeneratorForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState)

  const setText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TEXT', payload: event.target.value })
  }, [])
  
  return {
    formState,
    setText,
  }
}

const GeneratorForm = () => {
  const { formState, setText } = useGeneratorForm()

  useEffect(() => {
    console.log('state', formState)
  }, [formState])

  return (
    <>
      <form onSubmit={() => ({})}>
        <input
          type="text"
          placeholder='挿入するテキスト'
          onChange={setText} />

        <Button type='submit'>
          送信
        </Button>
      </form>
    </>
  )
}

export default GeneratorForm