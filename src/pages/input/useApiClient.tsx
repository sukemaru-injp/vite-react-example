import axios from 'axios'
import type { PostFileApiReq } from './types'
import { storage } from '../../libs/firebase'
import { ref, uploadBytes } from 'firebase/storage';
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

type Params = {
  key: string
  file: File
}

const useApiClient = () => {
  const postFileApi = (req: PostFileApiReq) => {
    return axios.post<{key: string }, { text: string }>(`${import.meta.env.VITE_FASTIFY_APP_API_PATH}img`, req)
  }

  const postFileFireStorage = ({ key, file }: Params) => {
    const storageRef = ref(storage, `/${key}/${key}-${format(new Date(), 'yyyyMMdd')}-${uuidv4()}`);

    return uploadBytes(storageRef, file)
  }

  return { postFileApi, postFileFireStorage }
}

export default useApiClient
