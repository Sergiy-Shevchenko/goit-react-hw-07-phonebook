import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsSelector, filterSelector } from 'redux/selector';
import { fethcContacts } from 'redux/operation';
import { getContacts } from 'redux/selector';



const filterContacts = (contacts, filter) => {
  const nopmalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nopmalizedFilter)
  );
};

export const ContactsList = () => {
  // const contacts = useSelector(contactsSelector);
  // const filter = useSelector(filterSelector);
  // const visibleContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch()
  const {items, isLoading, error} = useSelector(getContacts);
  console.log(items)
  
  useEffect(()=>{
    dispatch(fethcContacts())
  },[dispatch])



  return (
    <div className={css.section}>
      <ul className={css.contacList}>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
        {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
        {items.map(item => ( 
          // <li className={css.contactItem} key={item.id}>
          <ContactsItem contact={item} /> 
            // </li>
         ))} 
       
      </ul>
    </div>
  );
};

export default ContactsList;
