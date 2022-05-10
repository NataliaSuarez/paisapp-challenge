import { useMutation } from 'react-query'
import axios from 'axios'

const postLogin = async (loginPayload) => {
  const { data: response } = await axios.post('https://paisa-challange.herokuapp.com/api/v1/paisapp/login', loginPayload)
  return response.data
}

const useLogin = (options) => useMutation(postLogin, { ...options })

export default useLogin
