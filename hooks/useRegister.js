import { useMutation } from 'react-query';

const DELAY = 1500;

const postRegister = async (registerPayload) => {
  // TODO: Add POST call with payload
  return new Promise(res => setTimeout(res, DELAY));
};

const useRegister = (options) => useMutation(postRegister, { ...options});

export default useRegister;