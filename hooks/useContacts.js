import { useQuery } from 'react-query';
import axios from 'axios';

const fetchContacts = async () => {
    const { data: response } = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/contacts');
    return response.data;
};

const useContacts = () => useQuery('contacts', fetchContacts);
export default useContacts;