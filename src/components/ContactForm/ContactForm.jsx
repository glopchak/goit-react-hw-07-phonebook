import { useState } from 'react';

import { Form, Label, Input, SubmitBtn} from './ContactForm.stuled';

export function ContactForm ({onAddContact} ) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


const handleChangeInput = event => {
  const { value } = event.currentTarget;
  event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
};
  
const handleSubmit = event => {
  event.preventDefault();
  onAddContact(name, number);
  reset();
};

const  reset = () => {
  setName('');
  setNumber('');
}
  
    return (
      <Form onSubmit={handleSubmit}>
        <Label> Name
          <Input
            onChange={handleChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </Label>
        <Label>Number
          <Input
            onChange={handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </Label>
        <SubmitBtn>Add contact</SubmitBtn>
      </Form>
    );
  }


