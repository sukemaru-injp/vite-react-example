import React, { useEffect, useState } from 'react'
import useApiClient from './useApiClient'
import InputFile from '../../components/InputFile'
import Button from '../../components/Button'

import { useAsyncFn } from '../../components/hooks/useAsyncFn'

const InputPage: React.FC = () => {
  const [file, setFile] = useState<File|null>(null)

  const { postFileApi } = useApiClient()
  

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target?.files?.[0] || null)
  }

  const [data, onSubmit] = useAsyncFn<typeof postFileApi>(postFileApi, [postFileApi])

  useEffect(() => {
    console.log('inData', data)
  }, [data])

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await onSubmit({ key: 'karin' })
    console.log(res)
  }

  return (
    <>
      <h2>InputPage</h2>
      <form onSubmit={onSubmitForm}>
        <InputFile
          onChangeFile={onChangeFile} />
        <Button type='submit'>
          送信!!
        </Button>
      </form>
    </>
  )
}

export default InputPage
