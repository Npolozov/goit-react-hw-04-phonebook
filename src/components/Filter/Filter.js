import { Wrapper, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input value={value} onChange={onChange}></Input>
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
