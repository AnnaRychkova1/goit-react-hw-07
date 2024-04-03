import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
