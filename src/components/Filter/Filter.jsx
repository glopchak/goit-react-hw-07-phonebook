import { Label, Input, FilterContainer } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ handleSetFilterValue }) {
  return (
    <FilterContainer>
      <Label>Find Contacts by name</Label>
      <Input tupe="text" onChange={handleSetFilterValue}></Input>
    </FilterContainer>
  );
}

Filter.propTypes = {
  handleSetFilterValue: PropTypes.func.isRequired,
};
