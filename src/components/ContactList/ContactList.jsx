import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';


export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
     dispatch(deleteContact(id));
  };

   function filterContacts(contacts, filter) {
    const filterValue = filter.toLowerCase().trim();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue));
   }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDeleteContact={handleDeleteContact} 
        />
      ))}
    </ul>
  );
}



ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
