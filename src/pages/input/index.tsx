import React, { useState, useEffect } from 'react'
import useApiClient from './useApi'
import InputFile from '../../components/InputFile'
import Button from '../../components/Button'

const InputPage: React.FC = () => {
  const [file, setFile] = useState<File|null>(null)

  const { postFileApi } = useApiClient()

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target?.files?.[0] || null)
  }

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await postFileApi({ key: 'karin' })
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
