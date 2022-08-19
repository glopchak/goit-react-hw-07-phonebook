import { ContactListItem } from "components/ContactListItem/ContactListItem";
import PropTypes from 'prop-types';

export function ContactList({contacts, handleDeleteContact}) {
  return (
    <ul>
      {contacts.map(({id, name, number}) => (
        <ContactListItem key={id} id={id} name={name}number = {number} handleDeleteContact={handleDeleteContact}/>
      ))}
    </ul>
  );
}


ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};