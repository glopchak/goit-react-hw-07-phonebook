import { Label, Input, FilterContainer } from './Filter.styled';
import PropTypes from 'prop-types';
import { filterContact } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';



export function Filter() {
  const dispatch = useDispatch();

  const handleSetFilterValue = ({ target: { value } }) => {
     dispatch(filterContact(value));
  };

  return (
    <FilterContainer>
      <Label>Find Contacts by name</Label>
      <Input tupe="text" onChange={handleSetFilterValue}></Input>
    </FilterContainer>
  );
}

Filter.propTypes = {
  handleSetFilterValue: PropTypes.func,
};
