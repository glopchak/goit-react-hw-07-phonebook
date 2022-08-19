import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


import { Form, Label, Input, SubmitBtn} from './ContactForm.stuled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      ...this.state,
      id: nanoid(),
    };
    this.props.onAddContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <Input
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </Label>
        <Label>
          <Input
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </Label>
        <SubmitBtn>Add contact</SubmitBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleChangeInput: PropTypes.func,
};