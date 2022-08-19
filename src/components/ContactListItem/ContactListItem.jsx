import { ContactItem, Info, DeleteBtn} from "./ContactListItem.styled"
import PropTypes from 'prop-types';

export function ContactListItem({id, name, number, handleDeleteContact }){
    return (
        <ContactItem>
            <Info>{name}: {number}</Info>
            
            <DeleteBtn onClick={()=> handleDeleteContact(id)}>delete</DeleteBtn>
          </ContactItem>
    )
}


ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    handleDeleteContact: PropTypes.func,
  };

