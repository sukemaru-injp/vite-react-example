import React from 'react'
import axios from 'axios'
import type { PostFileApiReq } from './types'

const useApi = () => {
  const postFileApi = (req: PostFileApiReq) => {
    return axios.post('http://localhost:8000/img', req)
  }
  return { postFileApi }
}

export default useApi
