import React, { useState, useEffect } from 'react'
import useApi from './useApi'
import InputFile from '../../components/InputFile'
import Button from '../../components/Button'

const InputPage: React.FC = () => {
  const [file, setFile] = useState<File|null>(null)

  const { postFileApi } = useApi()

  useEffect(() => {
    console.log(import.meta.env.MODE, import.meta.env.VITE_FASTIFY_APP_API_PATH)
    console.log(file)
  }, [file])

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
