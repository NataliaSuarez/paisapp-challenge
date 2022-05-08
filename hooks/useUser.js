import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUser = async () => {
    const { data: response } = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/user');
    return response.data;
};

const useUser = () => useQuery('user', fetchUser);
export default useUser;