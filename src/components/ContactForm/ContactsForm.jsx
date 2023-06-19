import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Notify } from 'notiflix';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import css from './ContactForm.module.css';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const hendleChangetNane = ({ target: { value } }) => {
    setName(value);
  };

  const hendleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };
  const hendleSubmit = event => {
    event.preventDefault();

    const notmalizeNewContact = name.toLowerCase();
    if (name === '') {
      return Notify.warning(`Please enter your name`);
    }
    if (number === '') {
      return Notify.warning(`${name} please enter your number`);
    }
    if (
      items.find(
        contact => contact.name.toLocaleLowerCase() === notmalizeNewContact
      )
    ) {
      return Notify.failure(`${name} is alredy in contacts`);
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.section}>
      <form className={css.form} onSubmit={hendleSubmit}>
        <label className={css.inputName}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={hendleChangetNane}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder="Please enter your name"
          />
        </label>
        <label className={css.inputName}>
          Number
          <input
            className={css.input}
            type="text"
            value={number}
            onChange={hendleChangeNumber}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder="Please enter your number"
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
