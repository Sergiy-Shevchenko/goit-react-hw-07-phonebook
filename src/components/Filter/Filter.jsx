import React from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { filterContacts } from 'redux/action';
import { filterSelector } from 'redux/selector';
import { filterContacts } from 'redux/filterReduser';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleFilterChange = ({target: {value}}) =>
    dispatch(filterContacts(value));

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="Search..."
    />
  );
};
