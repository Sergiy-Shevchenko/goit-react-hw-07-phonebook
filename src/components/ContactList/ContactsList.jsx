import React from 'react';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selector';

const filterContacts = (contacts, filter) => {
  const nopmalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nopmalizedFilter)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const visibleContacts = filterContacts(contacts, filter);

  return (
    <div className={css.section}>
      <ul className={css.contacList}>
        {visibleContacts.map(contact => (
          <ContactsItem contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
