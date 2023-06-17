import axios from "axios";

export const getContacts = async () => {
    const {data} = await axios ('https://6488d29c0e2469c038fe6b72.mockapi.io/contacts/')
    return data
}

export const getContactsDetails = async (id) => {
    const {data} = await axios (`https://6488d29c0e2469c038fe6b72.mockapi.io/contacts/${id}/`)
    return data
}