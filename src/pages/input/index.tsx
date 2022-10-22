import React, { useEffect, useState } from 'react'
import useApiClient from './useApiClient'
import InputFile from '../../components/InputFile'
import Button from '../../components/Button'
import styled from 'styled-components'
import Select from '../../components/Select'
import { memberList } from '../../utils'
import { Link } from 'react-router-dom'

import { useAsyncFn } from '../../components/hooks/useAsyncFn'
import { useToast } from '../../components/ToastProvider'

const InputPage: React.FC = () => {
  const [file, setFile] = useState<File|null>(null)
  const [key, setKey] = useState<string>('')

  const { postFileFireStorage } = useApiClient()
  const { successToast, errorToast } = useToast()
  

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target?.files?.[0] || null)
  }
  const [data, onSubmit] = useAsyncFn(postFileFireStorage, [postFileFireStorage])

  useEffect(() => {
    console.log('inData', data)
  }, [data])

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (file === null) { return errorToast('file未選択') }
    await onSubmit({ key, file }).then((snapshot) => {
      successToast('保存Done')
      reset()
    }).catch((e) => {
      errorToast(e)
    })
  }

  const reset = () => {
    setFile(null)
    setKey('')
  }

  return (
    <>
      <h2>InputPage</h2>
      <Link to={'/'}>To Top</Link>
      <Wrapper>
      <form onSubmit={onSubmitForm}>
        <InputFile
          onChangeFile={onChangeFile} />

        <Wrapper>
          <Select onChange={(e) => setKey(e.target.value)}>
            {memberList.map((member, i) => {
              return (
                <option
                  key={i}
                  value={member.key}>
                  {member.label}
                </option>    
              )
            })}
          </Select>
        </Wrapper>
        <Button
          disabled={data.loading}
          type='submit'>
          送信!!
        </Button>
      </form>
      </Wrapper>
    </>
  )
}

export default InputPage

const Wrapper = styled.div`
padding: 5px;
`