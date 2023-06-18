import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../Icons/phone.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

export const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <li className={css.contactItem} key={id}>
        <p className={css.contacName}>
          <AddIcon />
          {name}: {number}
        </p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
