import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppContainer, PageTitle, Title } from './App.styled';


const initValue = () => {
  const contactsLocalStorage = localStorage.getItem('contacts');
  if (
    contactsLocalStorage === '' ||
    JSON.parse(contactsLocalStorage).length === 0
  ) {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
  return JSON.parse(contactsLocalStorage);
};

export function App() {
  const [contacts, setContacts] = useState(initValue);
  const [filter, setFilter] = useState('');
  const filteredContacts = filterContacts();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function changeFilterHandler(e) {
    const {
      target: { value },
    } = e;
    setFilter(value);
  }

  function submitHandler(name, number) {
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: nanoid(), name, number },
      ...prevContacts,
    ]);
  }

  function filterContacts() {
    const filterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterValue)
    );
  }

  function deleteBtnHandler(id) {
    setContacts(contacts.filter(contact => contact.id !==  id));
  }

  return (
    <AppContainer>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm onAddContact={submitHandler} />
      <Title>Contacts</Title>
      <Filter
        value={filter}
        handleSetFilterValue={changeFilterHandler}
      />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={deleteBtnHandler}
      />
    </AppContainer>
  );
}
