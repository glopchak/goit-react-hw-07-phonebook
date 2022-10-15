import { Label, Input, FilterContainer } from './Filter.styled';
import PropTypes from 'prop-types';
import { updateFilter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();

  const handleSetFilterValue = ({ target: { value } }) => {
    dispatch(updateFilter(value));
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
