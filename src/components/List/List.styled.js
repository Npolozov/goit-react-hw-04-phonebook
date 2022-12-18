import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
`;

export const ItemStyle = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  justify-items: end;
  align-items: center;
`;
