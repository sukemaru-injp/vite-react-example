import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

const Input = styled.input<{ padding: number }>`
${({ padding }) => `padding: ${padding}px`};
`

interface Props {
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile: React.FC<Props> = ({ onChangeFile }) => {
  return (
    <>
      <Input
        padding={5}
        type="file"
        onChange={onChangeFile} />
    </>
  )
}

export default InputFile
