import { ContactsForm } from './ContactForm/ContactsForm';
import { ContactsList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './Styles/Styles.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={css.title}>Contacts</h2>
      <h3 className={css.inputName}>Find contacts by name</h3>
      <Filter />
      <ContactsList />
    </div>
  );
};
