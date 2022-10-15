import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactItem, Info, DeleteBtn} from "./ContactListItem.styled"
import PropTypes from 'prop-types';

export function ContactListItem({id, name, number }){
    const dispatch = useDispatch();

    return (
        <ContactItem>
            <Info>{name}: {number}</Info>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>delete</DeleteBtn>
          </ContactItem>
    )
}


ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    handleDeleteContact: PropTypes.func,
  };

