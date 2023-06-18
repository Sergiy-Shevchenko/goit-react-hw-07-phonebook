import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios(
    'https://6488d29c0e2469c038fe6b72.mockapi.io/contacts/'
  );
  return data;
};
