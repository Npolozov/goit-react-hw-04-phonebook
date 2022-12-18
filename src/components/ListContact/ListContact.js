import { Button } from './ListContact.styled';
import PropTypes from 'prop-types';

export function ListContact({ item: { name, number, id }, onDeleteContact }) {
  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </>
  );
}

ListContact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
