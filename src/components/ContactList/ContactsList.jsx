import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fethcContacts } from 'redux/operation';
import { selectIsLoading, selectError, visibleContacts } from 'redux/selector';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(visibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fethcContacts());
  }, [dispatch]);

  if (filterContacts.length === 0) return null;

  return (
    <div className={css.section}>
      <ul className={css.contacList}>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {filterContacts.map(item => (
          <ContactsItem contact={item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
