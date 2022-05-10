import { useMutation } from 'react-query'

const DELAY = 1500

const postRegister = async (registerPayload) => {
  // TODO: Add POST call with payload
  // eslint-disable-next-line promise/param-names
  return new Promise(res => setTimeout(res, DELAY))
}

const useRegister = (options) => useMutation(postRegister, { ...options })

export default useRegister
