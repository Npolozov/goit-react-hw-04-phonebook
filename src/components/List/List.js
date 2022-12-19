import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle } from './List.styled';
import PropTypes from 'prop-types';

export const List = ({ items, onDeleteContact }) => {
  console.log(items);
  return (
    <ListStyle>
      {items.map((item, id) => (
        <ItemStyle key={id}>
          <ListContact item={item} onDeleteContact={onDeleteContact} />
        </ItemStyle>
      ))}
    </ListStyle>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
