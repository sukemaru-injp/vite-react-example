import axios from 'axios'
import type { PostFileApiReq } from './types'

const useApiClient = () => {
  const postFileApi = (req: PostFileApiReq) => {
    return axios.post<{key: string }, { text: string }>(`${import.meta.env.VITE_FASTIFY_APP_API_PATH}img`, req)
  }
  return { postFileApi }
}

export default useApiClient
