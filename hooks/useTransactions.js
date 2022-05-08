import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTransactions = async () => {
    const { data: response } = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/transactions');
    return response.data;
};

const useTransactions = () => useQuery('transactions', fetchTransactions);
export default useTransactions;